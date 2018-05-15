var expect = require("chai").expect;
var stripAnsi = require("strip-ansi");

exports.templateData = {};

exports.checkError = function(e) {
    var message = stripAnsi(e.toString());
    expect(message).to.contain("input.foo ==== 1");
};
