var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(2);

    var message = e.toString();
    expect(message).to.contain('The <macro> tag must contain a name as its first attribute, example: <macro greeting()>');
};