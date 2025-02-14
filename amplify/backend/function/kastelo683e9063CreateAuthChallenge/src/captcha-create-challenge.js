/* eslint-disable no-param-reassign */
/** @typedef {import('aws-lambda').CognitoUserPoolTriggerHandler} CognitoUserPoolTriggerHandler */
/** @type CognitoUserPoolTriggerHandler */

exports.handler = (event, context) => {
  if (
    event.request.session.length === 2 &&
    event.request.challengeName === 'CUSTOM_CHALLENGE'
  ) {
    event.response.publicChallengeParameters = {};
    event.response.publicChallengeParameters = { trigger: 'true' };
    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.answer = '';
    event.response.challengeMetadata = 'CAPTCHA_CHALLENGE';
  }
  context.done(null, event);
};
