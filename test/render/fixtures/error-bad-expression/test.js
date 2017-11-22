var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(1);

    var message = e.toString();
    expect(message).to.contain('Error: An error occurred while trying to compile template at path');
    expect(message).to.contain('Invalid JavaScript expression for attribute "class"');
    expect(message).to.contain('Unexpected identifier: ((this is not valid))');
};