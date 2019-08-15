/* eslint-disable no-param-reassign, @typescript-eslint/no-var-requires */
/** @typedef {import('axios').AxiosInstance} AxiosInstance */
/** @type AxiosInstance */
// @ts-ignore
const axios = require('axios');
/** @typedef {import('aws-lambda').CognitoUserPoolTriggerHandler} CognitoUserPoolTriggerHandler */
/** @type CognitoUserPoolTriggerHandler */

exports.handler = (event, __, callback) => {
  axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHASECRET}&response=${event.request.challengeAnswer}`,
      {}
    )
    .then(response => {
      if (response && response.data && response.data.success) {
        event.response.answerCorrect = true;
        callback(null, event);
      } else {
        event.response.answerCorrect = false;
        callback(new Error('captcha verification error'), event);
      }
    })
    .catch(() => {
      event.response.answerCorrect = false;
      callback(new Error('captcha verification error'), event);
    });
};
