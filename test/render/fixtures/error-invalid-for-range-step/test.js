var expect = require("chai").expect;
var stripAnsi = require("strip-ansi");

exports.templateData = {};

exports.checkError = function(e) {
    var message = stripAnsi(e.toString());
    expect(message).to.contain(
        "An error occurred while trying to compile template at path"
    );
    expect(message).to.contain('Invalid "step" expression:');
    expect(message).to.contain("0 0");
};
