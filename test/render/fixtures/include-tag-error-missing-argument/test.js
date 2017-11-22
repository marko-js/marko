var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    var message = e.toString();
    expect(message).to.contain('The <include(...)> tag must have an argument');
};