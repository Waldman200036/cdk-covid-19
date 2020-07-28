/* jshint esversion:8 */
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

// eslint-disable-next-line import/prefer-default-export
export class CdkCovid19Stack extends cdk.Stack {
  // eslint-disable-next-line no-useless-constructor
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
    // defines an AWS Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X, // execution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
      handler: 'hello.handler', // file is hello
    });

    const bye = new lambda.Function(this, 'byeHandler', {
      runtime: lambda.Runtime.NODEJS_10_X, // execution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
      handler: 'bye.handler', // file is hello
    });

    const app = new lambda.Function(this, 'appHandler', {
      runtime: lambda.Runtime.NODEJS_10_X, // execution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from "lambda" directory
      handler: 'test/app.handler', // file is app
    });
    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello,
    });

    new apigw.LambdaRestApi(this, 'Endpoint2', {
      handler: bye,
    });

    new apigw.LambdaRestApi(this, 'apppoint', {
      handler: app,
    });
  }
}
