var expect = require('chai').expect;

exports.checkError = function (e) {
    expect(e.toString()).to.contain('A component class is not allowed to use `extends`');
    expect(e.toString()).to.contain('https://github.com/marko-js/marko/wiki/Error:-Component-class-with-extends');
};