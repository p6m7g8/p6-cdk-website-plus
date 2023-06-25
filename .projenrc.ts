import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  name: 'p6-cdk-website-plus',
  author: 'Philip M. Gollucci',
  authorAddress: 'pgollucci@p6m7g8.com',
  authorOrganization: true,
  repositoryUrl: 'https://github.com/p6m7g8/p6-cdk-website-plus',
  description: 'P6 Static Website',
  stability: 'experimental',
  keywords: ['cdk', 'aws', 'website', 'static', 's3', 'cloudfront', 'p6', 'p6m7g8'],

  defaultReleaseBranch: 'main',
  cdkVersion: '2.1.0',
  jsiiVersion: '~5.0.0',
  projenrcTs: true,

  devDeps: [
    'cdk-dia',
  ]
});
project.synth();