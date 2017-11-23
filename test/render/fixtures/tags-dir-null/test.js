var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    //includes the tag it broke on
    expect(e.message).to.contain('Unrecognized tag: test-hello');

    //includes the line number of the template
    expect(e.message).to.contain('template.marko:1:0');
};