var expect = require("chai").expect;
var fs = require("fs");
var requireHook = require("../../../../node-require");

function compileAndCheck(path, shouldWriteToDisk) {
    var resolved = require.resolve(path);
    var compiledFile = resolved + ".js";

    try {
        fs.unlinkSync(compiledFile);
    } catch (e) {
        /* ignore error */
    }

    require(resolved);

    expect(fs.existsSync(compiledFile)).to.equal(shouldWriteToDisk);
}

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    try {
        requireHook.install({
            compilerOptions: {
                writeToDisk: true,
                preserveWhitespace: true
            }
        }); // Reconfigure for testing

        expect(markoCompiler.config.writeToDisk).to.equal(true);
        expect(markoCompiler.config.preserveWhitespace).to.equal(true);

        compileAndCheck("./a.marko", true /* should write to disk */);

        requireHook.install({
            compilerOptions: {
                writeToDisk: false,
                preserveWhitespace: false
            }
        });

        expect(markoCompiler.config.writeToDisk).to.equal(false);
        expect(markoCompiler.config.preserveWhitespace).to.equal(false);

        markoCompiler.configure({
            writeToDisk: true,
            preserveWhitespace: true
        });

        expect(markoCompiler.config.writeToDisk).to.equal(true);
        expect(markoCompiler.config.preserveWhitespace).to.equal(true);

        compileAndCheck("./b.marko", false /* should write to disk */);

        markoCompiler.configure(); // Reset to defaults
        expect(markoCompiler.config.writeToDisk).to.equal(true);
        expect(markoCompiler.config.preserveWhitespace).to.equal(false);

        requireHook.install({
            compilerOptions: {
                writeToDisk: true,
                preserveWhitespace: false
            }
        });

        compileAndCheck("./c.marko", true /* should write to disk */);

        requireHook.install({
            compilerOptions: {
                preserveWhitespace: false
            }
        });

        markoCompiler.configure({
            writeToDisk: false,
            preserveWhitespace: true
        });

        compileAndCheck("./d.marko", false /* should write to disk */);

        done();
    } finally {
        // Reset require hook.
        requireHook.install({
            compilerOptions: {
                writeToDisk: false
            }
        });
    }
};
