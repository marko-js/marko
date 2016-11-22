var nodePath = require('path');
var fs = require('fs');

exports.check = function(marko, markoCompiler, expect, done) {
    var template;
    var templatePath;

    // Make sure calling load with templatePath:String, templateSrc:String arguments works
    templatePath = nodePath.join(__dirname, 'dummy.marko');
    template = marko.load(templatePath, '- Hello $!{data.name}!');
    expect(template.renderSync({name: 'Frank'}).toString()).to.equal('Hello Frank!');

    // Make sure calling load with templatePath:String, templateSrc:String, options:Object arguments works
    templatePath = nodePath.join(__dirname, 'dummy.marko');
    template = marko.load(templatePath, '- Hello $!{data.name}!', {});
    expect(template.renderSync({name: 'Frank'}).toString()).to.equal('Hello Frank!');

    // Make sure calling load with templatePath:String, options:Object arguments works
    delete markoCompiler.defaultOptions.writeToDisk;

    templatePath = nodePath.join(__dirname, 'template.marko');
    var compiledPath = nodePath.join(__dirname, 'template.marko.js');

    try {
        fs.unlinkSync(compiledPath);
    } catch(e) {
        // ignore
    }

    template = marko.load(templatePath, {writeToDisk: false});
    expect(fs.existsSync(compiledPath)).to.equal(false);
    expect(template.render).to.be.a('function');
    expect(template.renderSync({name: 'Frank'}).toString()).to.equal('Hello Frank!');
    done();
};