/* eslint-disable global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires */
/*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/
/** @typedef {import('aws-lambda').CognitoUserPoolTriggerHandler} CognitoUserPoolTriggerHandler */
/** @type CognitoUserPoolTriggerHandler */

exports.handler = (event, context, callback) => {
  const modules = process.env.MODULES.split(',');
  for (let i = 0; i < modules.length; i += 1) {
    const { handler } = require(modules[i]);
    handler(event, context, callback);
  }
};
