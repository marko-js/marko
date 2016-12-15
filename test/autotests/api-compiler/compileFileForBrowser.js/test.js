var fs = require('fs');
var path = require('path');

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var compiler = require('marko/compiler');
    var templatePath = path.join(__dirname, 'template.marko');

    var compiledSrc = compiler.compileFileForBrowser(templatePath, {});

    helpers.compare(compiledSrc, '.js');

    done();
};