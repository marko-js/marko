var expect = require('chai').expect;

exports.checkError = function (e) {
    expect(e.toString()).to.contain('The "class" tag does not allow nested body content');
};