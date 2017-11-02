var path = require('path');

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var compiler = require('marko/compiler');
    var templatePath = path.join(__dirname, 'template.marko');

    var compileContext = compiler.createCompileContext(templatePath);

    var tagDef;

    tagDef = compileContext.getTagDef('foo');
    expect(tagDef.filePath).to.equal(path.join(__dirname, 'components/foo/marko-tag.json'));
    expect(tagDef.dir).to.equal(path.join(__dirname, 'components/foo'));

    tagDef = compileContext.getTagDef('bar');
    expect(tagDef.filePath).to.equal(path.join(__dirname, 'components/bar/index.marko'));
    expect(tagDef.dir).to.equal(path.join(__dirname, 'components/bar'));

    tagDef = compileContext.getTagDef('baz');
    expect(tagDef.filePath).to.equal(path.join(__dirname, 'components/baz.marko'));
    expect(tagDef.dir).to.equal(path.join(__dirname, 'components'));

    tagDef = compileContext.getTagDef('code-generator-only');
    expect(tagDef.filePath).to.equal(path.join(__dirname, 'components/code-generator-only/code-generator.js'));
    expect(tagDef.dir).to.equal(path.join(__dirname, 'components/code-generator-only'));

    done();
};
