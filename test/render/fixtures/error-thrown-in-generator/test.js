var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    //includes the tag it broke on
    expect(e.message).to.contain('<custom-tag>');

    //includes the line number of the template
    expect(e.message).to.contain('template.marko:2');

    //retains original stack trace
    expect(e.stack.toString()).to.contain('custom-tag.js:2:11');

    //retains original message
    expect(e.message).to.contain('Something Happened!');
};