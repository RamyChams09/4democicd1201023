#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemocicdpiplineStack } from '../lib/democicdpipline-stack';

const app = new cdk.App();
new DemocicdpiplineStack(app, 'DemocicdpiplineStack', {
  env: { account:'646808865460', region:'eu-central-1'},
});