/* eslint-disable no-param-reassign */
/** @typedef {import('aws-lambda').CognitoUserPoolTriggerHandler} CognitoUserPoolTriggerHandler */

/** @type CognitoUserPoolTriggerHandler */
exports.handler = (event, context) => {
  if (
    event.request.session.length === 1 &&
    // @ts-ignore
    event.request.session[0].challengeName === 'SRP_A'
  ) {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'PASSWORD_VERIFIER';
  } else if (
    event.request.session.length === 2 &&
    event.request.session[1].challengeName === 'PASSWORD_VERIFIER' &&
    event.request.session[1].challengeResult
  ) {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'CUSTOM_CHALLENGE';
  } else if (
    event.request.session.length === 3 &&
    event.request.session[2].challengeName === 'CUSTOM_CHALLENGE' &&
    event.request.session[2].challengeResult
  ) {
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  } else {
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }
  context.done(null, event);
};
