var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(e) {
  var message = e.toString();
  expect(message).to.contain(
    '"class" can only be used at the root of the template'
  );
};
