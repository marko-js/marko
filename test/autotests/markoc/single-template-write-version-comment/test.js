var expect = require('chai').expect;
var markoVersion = require('../../../../package.json').version;

function _appendMarkoVersionComment(str) {
    return '// Compiled using markoc@' + markoVersion + ' - DO NOT EDIT\n' + str;
}

exports.test = function(helpers) {
    helpers.spawnSync(['template.marko']);

    var compiledFile = helpers.readSync('template.marko.js').toString();
    var expectedFile = _appendMarkoVersionComment(helpers.readSync('expected.js'));
    compiledFile = compiledFile.replace(/marko\/dist\//g, 'marko/src/');
    expect(compiledFile).to.deep.equal(expectedFile);
};
