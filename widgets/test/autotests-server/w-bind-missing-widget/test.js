var expect = require('chai').expect;

module.exports = function(helpers) {
    expect(function() {
        require('./template.marko');
    }).to.throw(/Invalid "w-bind" attribute/);
};