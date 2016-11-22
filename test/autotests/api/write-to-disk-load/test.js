var nodePath = require('path');
var fs = require('fs');

exports.check = function(marko, markoCompiler, expect, done) {
    var compiledPath;

    var templatePath = nodePath.join(__dirname, 'template.marko');
    compiledPath = nodePath.join(__dirname, 'template.marko.js');
    var template = marko.load(templatePath);
    expect(fs.existsSync(compiledPath)).to.equal(true);
    expect(template.renderSync({name: 'Frank'}).toString()).to.equal('Hello Frank!');

    done();
};