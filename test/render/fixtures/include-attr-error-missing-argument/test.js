var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain("template.marko");
    expect(message).to.contain("must have an argument");
};
