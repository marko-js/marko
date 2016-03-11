var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function(e) {
    var message = e.toString();
    expect(message).to.contain('Error: Unable to compile template at path');
    expect(message).to.contain('Unexpected number: (data.foo === dasda 0)');
};
