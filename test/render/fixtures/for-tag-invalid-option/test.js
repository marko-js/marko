var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (err) {
    expect(err.toString()).to.contain('template.marko:1:0] Unexpected input: foo');
};