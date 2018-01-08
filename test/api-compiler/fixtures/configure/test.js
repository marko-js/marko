exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var compiler = require('marko/compiler');
    compiler.configure(); // Use defaults
    expect(compiler.config.writeToDisk).to.equal(true);
    expect(compiler.config.preserveWhitespace).to.equal(false);
    expect(compiler.config.writeVersionComment).to.equal(true);
    expect(compiler.config.ignoreUnrecognizedTags).to.equal(false);

    compiler.configure({
        preserveWhitespace: true
    });
    expect(compiler.config.writeToDisk).to.equal(true);
    expect(compiler.config.preserveWhitespace).to.equal(true);

    compiler.configure(); // Use defaults
    expect(compiler.config.writeToDisk).to.equal(true);
    expect(compiler.config.preserveWhitespace).to.equal(false);
    done();
};