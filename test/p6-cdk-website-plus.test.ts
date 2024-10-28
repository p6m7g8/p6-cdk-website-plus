import * as cdk from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { P6CDKWebsitePlus } from '../src'

it('p6CDKWebsitePlus snapshot test', () => {
  // GIVEN
  const theEnv = {
    account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
  }
  const app = new cdk.App()
  const stack = new cdk.Stack(app, 'MyStack', { env: theEnv })

  // WHEN
  new P6CDKWebsitePlus(stack, 'p6-cdk-website-plus', {
    hostedZoneName: 'p6m7g8.org',
    verifyEmail: 'test@p6m7g8.org',
    cloudfrontRecordName: 'www.p6m7g8.org',
  })

  // THEN
  const template = Template.fromStack(stack).toJSON()
  expect(template).toMatchSnapshot()
})
