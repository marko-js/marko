var expect = require('chai').expect;

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain('https://github.com/marko-js/marko/wiki/Error:-Dynamic-root-HTML-element-id-attribute');
};
