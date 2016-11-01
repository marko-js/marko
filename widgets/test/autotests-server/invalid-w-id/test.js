var expect = require('chai').expect;

module.exports = function(helpers) {
    expect(function() {
        require('./template.marko');
    }).to.throw(/The "w-id" attribute cannot be used in conjuntion with the "w-bind" attribute/);
};