exports.check = function (marko, markoCompiler, expect, helpers, done) {
    markoCompiler.configure(); // Use defaults
    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(false);

    markoCompiler.configure({
        preserveWhitespace: true
    });
    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(true);

    markoCompiler.configure(); // Use defaults
    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(false);
    done();
};