var expect = require('chai').expect;

exports.templateData = {};

exports.checkError = function (e) {
    //includes the tag it broke on
    expect(e.message).to.contain('Unrecognized tag: invalid-tag');

    expect(e.message).to.contain('https://github.com/marko-js/marko/wiki/Error:-Unrecognized-Tag');

    //includes the line number of the template
    expect(e.message).to.contain('template.marko:2:4');
};