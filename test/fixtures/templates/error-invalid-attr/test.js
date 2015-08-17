var expect = require('chai').expect;

exports.templateData = {};

exports.options = {
    handleCompileError: function(e) {
        expect(e.toString()).to.contain('template.marko:1:0');
        expect(e.toString()).to.contain('The tag "test-invalid-attr" in taglib');
        expect(e.toString()).to.contain('does not support attribute "invalid"');
    }
};