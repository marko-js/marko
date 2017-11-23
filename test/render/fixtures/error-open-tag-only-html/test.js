var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(1);

    var message = e.toString();
    expect(message).to.contain('The closing "test-open-tag-only" tag was not expected');
};