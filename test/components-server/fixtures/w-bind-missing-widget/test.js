var expect = require('chai').expect;

module.exports = function () {
    expect(function () {
        require('./template.marko');
    }).to.throw(/No corresponding JavaScript module found in the same directory/);
};