var expect = require('chai').expect;

exports.templateData = {};

exports.options = {
    handleCompileError: function(e) {
        expect(e.toString()).to.contain('template.marko:8:0');
        expect(e.toString()).to.contain('does not support attribute "invalid"');

        expect(e.toString()).to.contain('template.marko:12:0');
        expect(e.toString()).to.contain('Invalid attribute value of "${;"');

        expect(e.toString()).to.contain('template.marko:1:0');
        expect(e.toString()).to.contain('"each" attribute is required');

        expect(e.toString()).to.contain('template.marko:5:0');
        expect(e.toString()).to.contain('Invalid each attribute of "item"');

        expect(e.toString()).to.contain('template.marko:16:0');
        expect(e.toString()).to.contain('Invalid for attribute of "item in items; invalid=true"');
    }
};