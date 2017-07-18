const expect = require('chai').expect;

exports.checkError = function(err) {
    expect(err.toString()).to.contain('The "for-key" tag cannot be used with "for:key".');
};
