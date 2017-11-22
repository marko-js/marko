var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    var message = e.toString();
    expect(message).to.contain('Unsupported attribute of "invalid" found on the <@header> custom tag. Allowed attributes: label');
};