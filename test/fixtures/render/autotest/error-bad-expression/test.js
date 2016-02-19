var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(1);

    var message = e.toString();
    expect(message).to.contain('Invalid JavaScript expression: ((this is not valid))');
    expect(message).to.contain('Invalid JavaScript expression for attribute "class"');
    expect(message).to.contain('Unexpected identifier');
};