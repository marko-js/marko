var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    var message = e.toString();
    expect(message).to.contain('<macro> tag with duplicate name of "hello" found');
    expect(message).to.contain('template.marko:7:4');
};