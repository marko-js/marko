var expect = require("chai").expect;

exports.templateData = {};

exports.checkError = function(e) {
    expect(Array.isArray(e.errors)).to.equal(true);
    expect(e.errors.length).to.equal(3);

    var message = e.toString();
    expect(message).to.contain('must only contain a "name" attribute');
};
