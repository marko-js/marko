var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    var message = e.toString();
    expect(message).to.contain('class is a static tag and can only be declared at the template root');
};