var nodePath = require('path');
var fs = require('fs');

exports.check = function(marko, markoCompiler, expect, done) {
    var compiledPath;

    try {
        var templatePath = nodePath.join(__dirname, 'template.marko');
        compiledPath = nodePath.join(__dirname, 'template.marko.js');
        var template = require(templatePath);
        delete require.cache[templatePath];
        expect(fs.existsSync(compiledPath)).to.equal(true);
        expect(template.renderSync({name: 'Frank'}).toString()).to.equal('Hello Frank!');
    } finally {
        fs.unlinkSync(compiledPath);
    }

    done();
};