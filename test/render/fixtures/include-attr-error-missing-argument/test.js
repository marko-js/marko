var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    var message = e.toString();
    expect(message).to.contain('template.marko:1:0');
    expect(message).to.contain('The include attribute must have an argument');
};