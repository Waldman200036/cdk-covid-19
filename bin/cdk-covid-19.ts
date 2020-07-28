#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCovid19Stack } from '../lib/cdk-covid-19-stack';

const app = new cdk.App();
new CdkCovid19Stack(app, 'CdkCovid19Stack');
