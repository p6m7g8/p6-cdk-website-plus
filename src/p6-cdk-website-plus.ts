import type { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as certificatemanager from 'aws-cdk-lib/aws-certificatemanager'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as route53 from 'aws-cdk-lib/aws-route53'
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

    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: props.hostedZoneName,
    })

    const www_certificate = new certificatemanager.Certificate(
      this,
      'WWW-Certificate',
      {
        domainName: props.cloudfrontRecordName,
        validation: certificatemanager.CertificateValidation.fromEmail({
          email: props.verifyEmail,
        }),
      },
    )

    const bucket = new s3.Bucket(this, 'MyBucket', {
      accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      publicReadAccess: true,
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
    })
    const oai = new cloudfront.OriginAccessIdentity(this, 'OAI')
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(bucket, {
          originAccessIdentity: oai, // If you're using an Origin Access Identity
        }),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      },
      domainNames: [props.cloudfrontRecordName],
      certificate: www_certificate,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    })

    const cloudfrontTarget = route53.RecordTarget.fromAlias(
      new route53targets.CloudFrontTarget(distribution),
    )

    new route53.ARecord(this, 'CloudfrontDnsRecord', {
      zone: hostedZone,
      recordName: props.cloudfrontRecordName,
      target: cloudfrontTarget,
    })
  }
}
