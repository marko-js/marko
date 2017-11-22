var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(1);

    var message = e.toString();
    expect(message).to.contain('template.marko:1:0');
    expect(message).to.contain('The tag "test-invalid-attr" in taglib');
    expect(message).to.contain('does not support attribute "invalid"');
};