var assert = require("assert/strict");

exports.templateData = {};

exports.checkError = function (e) {
  var message = e.toString();
  assert.match(message, /Something went wrong/);
};

exports.skip_vdom = true;
