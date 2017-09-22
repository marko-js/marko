var fs = require('fs');
var path = require('path');
var markoVersion = require('../../../../package.json').version;

function _appendMarkoVersionComment(str) {
    return '// Compiled using marko@' + markoVersion + ' - DO NOT EDIT\n' + str;
}

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var compiler = require('marko/compiler');
    var templatePath = path.join(__dirname, 'template.marko');
    var expectedPath = path.join(__dirname, 'expected.js');

    var templateSrc = fs.readFileSync(templatePath, { encoding: 'utf8' });

    var compiledTemplate = compiler.compileForBrowser(templateSrc, templatePath);
    var expected = fs.readFileSync(expectedPath, { encoding: 'utf8' });

    compiledTemplate.code = _appendMarkoVersionComment(compiledTemplate.code);
    expected = _appendMarkoVersionComment(expected);

    var code = compiledTemplate.code;
    code = code.replace(/marko\/dist\//g, 'marko/src/');

    helpers.compare(code, '.js');

    done();
};
