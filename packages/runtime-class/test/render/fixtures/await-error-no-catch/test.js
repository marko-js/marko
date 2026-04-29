var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function (e) {
  var message = e.toString();
  expect(message).to.contain("Something went wrong");
};

exports.skip_vdom = true;
