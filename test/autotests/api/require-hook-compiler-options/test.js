exports.check = function(marko, markoCompiler, expect, done) {
    markoCompiler.configure({
        writeToDisk: true,
        preserveWhitespace: true
    }); // Reconfigure for testing

    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(true);

    require('marko/node-require').install({
        compilerOptions: {
            writeToDisk: false,
            preserveWhitespace: false
        }
    });

    expect(markoCompiler.config.writeToDisk).to.equal(false);
    expect(markoCompiler.config.preserveWhitespace).to.equal(false);

    markoCompiler.configure(); // Reset to defaults
    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(false);
    done();
};