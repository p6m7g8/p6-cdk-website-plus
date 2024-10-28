import type { Construct } from 'constructs'
import process from 'node:process'
import * as cdk from 'aws-cdk-lib'
import { P6CDKWebsitePlus } from '../src'

class VisualizeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props)

    new P6CDKWebsitePlus(this, 'MyWebsite', {
      hostedZoneName: 'gollucci.com',
      verifyEmail: 'pgollucci@p6m7g8.com',
      cloudfrontRecordName: 'www.gollucci.com',
    })
  }
}

const theEnv = {
  account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
}

const app = new cdk.App()
new VisualizeStack(app, 'VisualizeStack', { env: theEnv })
app.synth()
