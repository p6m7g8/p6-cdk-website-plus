import type { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as iam from 'aws-cdk-lib/aws-iam'
import * as route53 from 'aws-cdk-lib/aws-route53'
import * as route53Patterns from 'aws-cdk-lib/aws-route53-patterns'
import * as route53targets from 'aws-cdk-lib/aws-route53-targets'
import * as s3 from 'aws-cdk-lib/aws-s3'

export interface IP6CDKWebsiteProps {
  hostedZoneName: string
  verifyEmail: string
  cloudfrontRecordName: string
}

export class P6CDKWebsitePlus extends cdk.Resource {
  constructor(scope: Construct, id: string, props: IP6CDKWebsiteProps) {
    super(scope, id)

    // Lookup for the hosted zone
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: props.hostedZoneName,
    })

    // Create the certificate for the domain
    const certificate = new certificatemanager.Certificate(this, 'Certificate', {
      domainName: props.hostedZoneName,
      subjectAlternativeNames: [props.cloudfrontRecordName],
      validation: certificatemanager.CertificateValidation.fromEmail({
        email: props.verifyEmail,
      }),
    })

    // Define the S3 bucket for website hosting
    const bucket = new s3.Bucket(this, 'MyBucket', {
      accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      publicReadAccess: true, // Required for static website hosting to work with CloudFront
      websiteIndexDocument: 'index.html',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      cors: [
        {
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.PUT],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
          maxAge: 3000,
        },
      ],
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS, // Allows public access via bucket policy
    })

    const logBucket = new s3.Bucket(this, 'LogBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      encryption: s3.BucketEncryption.S3_MANAGED,
      publicReadAccess: false,
      accessControl: s3.BucketAccessControl.LOG_DELIVERY_WRITE, // Enable ACLs for CloudFront logging
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS, // Allow ACLs for logging while blocking public access
    })

    // Grant CloudFront permission to write logs to the log bucket
    logBucket.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:PutObject'],
      resources: [logBucket.arnForObjects('*')],
      principals: [new iam.ServicePrincipal('delivery.logs.amazonaws.com')],
      conditions: {
        StringEquals: {
          'aws:SourceAccount': cdk.Aws.ACCOUNT_ID,
        },
        ArnLike: {
          'aws:SourceArn': `arn:aws:cloudfront::${cdk.Aws.ACCOUNT_ID}:distribution/*`,
        },
      },
    }))

    const cachePolicy = new cloudfront.CachePolicy(this, 'CachePolicy', {
      defaultTtl: cdk.Duration.days(1),
      minTtl: cdk.Duration.seconds(0),
      maxTtl: cdk.Duration.days(365),
      cookieBehavior: cloudfront.CacheCookieBehavior.none(),
      headerBehavior: cloudfront.CacheHeaderBehavior.none(),
      queryStringBehavior: cloudfront.CacheQueryStringBehavior.none(),
      enableAcceptEncodingGzip: true,
      enableAcceptEncodingBrotli: true,
    })

    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultRootObject: 'index.html',
      comment: props.cloudfrontRecordName,
      enabled: true,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      domainNames: [props.cloudfrontRecordName], // Use only one domain to avoid conflicts
      certificate,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      defaultBehavior: {
        origin: new cloudfront_origins.S3StaticWebsiteOrigin(bucket),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy,
      },
      enableLogging: true,
      logBucket,
      logIncludesCookies: true,
    })

    const cloudfrontTarget = route53.RecordTarget.fromAlias(
      new route53targets.CloudFrontTarget(distribution),
    )

    // Create both A (IPv4) and AAAA (IPv6) DNS records for www.gollucci.com (cloudfrontRecordName)
    new route53.ARecord(this, 'CloudfrontDnsRecordWWW', {
      zone: hostedZone,
      recordName: props.cloudfrontRecordName,
      target: cloudfrontTarget,
    })

    new route53.AaaaRecord(this, 'CloudfrontDnsRecordAAAAWWW', {
      zone: hostedZone,
      recordName: props.cloudfrontRecordName,
      target: cloudfrontTarget,
    })

    // Use HttpsRedirect for redirecting root domain (hostedZoneName) to www
    new route53Patterns.HttpsRedirect(this, 'Redirect', {
      recordNames: [props.hostedZoneName], // Redirect root domain
      targetDomain: props.cloudfrontRecordName, // Redirect to www
      zone: hostedZone,
    })
  }
}
