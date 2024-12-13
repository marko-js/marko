var expect = require("chai").expect;

exports.templateData = {};

exports.skip_vdom = "VDOM does not support async components";

exports.checkError = function (e) {
  var message = e.toString();
  expect(message).to.contain("Something went wrong");
};
