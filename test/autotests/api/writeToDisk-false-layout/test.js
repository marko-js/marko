var nodePath = require('path');
var fs = require('fs');

exports.check = function(marko, markoCompiler, expect, done) {

    markoCompiler.configure({
        writeToDisk: false
    });

    var templatePath = nodePath.join(__dirname, 'template.marko');
    var template = marko.load(templatePath);
    expect(template.renderSync({name: 'Frank'}).toString()).to.equal('<div>Hello Frank!</div>');

    markoCompiler.configure({
        writeToDisk: false
    });

    var compiledTemplatePath = nodePath.join(__dirname, 'template.marko.js');
    var compiledIncludeTemplatePath = nodePath.join(__dirname, 'layout.marko.js');

    expect(fs.existsSync(compiledTemplatePath)).to.equal(false);
    expect(fs.existsSync(compiledIncludeTemplatePath)).to.equal(false);

    // Revert back to defaults
    markoCompiler.configure();

    done();
};