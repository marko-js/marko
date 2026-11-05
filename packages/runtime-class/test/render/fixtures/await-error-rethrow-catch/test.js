var assert = require("assert/strict");

exports.templateData = {};

exports.skip_vdom = "VDOM does not support async components";

exports.checkError = function (e) {
  var message = e.toString();
  assert.match(message, /Something went wrong/);
};
