var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(1);

    var message = e.toString();
    expect(message).to.contain('template.marko:1:16');
    expect(message).to.contain('The closing "foo" tag does not match the corresponding opening "div" tag');
};