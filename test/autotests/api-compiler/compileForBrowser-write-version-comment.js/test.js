var fs = require('fs');
var path = require('path');
var markoVersion = require('../../../../package.json').version;

function getMarkoVersionComment() {
    return '// Compiled using marko@' + markoVersion + ' - DO NOT EDIT\n';
}

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var compiler = require('marko/compiler');
    var templatePath = path.join(__dirname, 'template.marko');

    var templateSrc = fs.readFileSync(templatePath, { encoding: 'utf8' });

    var compiledTemplate = compiler.compileForBrowser(templateSrc, templatePath);

    expect(compiledTemplate.code).to.include(getMarkoVersionComment());

    done();
};
