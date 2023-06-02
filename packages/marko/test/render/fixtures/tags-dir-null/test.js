var expect = require("chai").expect;
var stripAnsi = require("strip-ansi");

exports.templateData = {};

exports.checkError = function (e) {
  var message = stripAnsi(e.message);
  //includes the tag it broke on
  expect(message).to.contain("test-hello");

  //includes the line number of the template
  expect(message).to.contain("template.marko:1:2");
};
