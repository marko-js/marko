var expect = require('chai').expect;
var fs = require('fs');

function compileAndCheck(path, shouldWriteToDisk) {
    var resolved = require.resolve(path);
    var compiledFile = resolved + '.js';

    try {
        fs.unlinkSync(compiledFile);
    } catch(e) {}

    require(resolved);

    expect(fs.existsSync(compiledFile)).to.equal(shouldWriteToDisk);
}

exports.check = function(marko, markoCompiler, expect, done) {
    markoCompiler.configure({
        writeToDisk: true,
        preserveWhitespace: true
    }); // Reconfigure for testing

    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(true);

    compileAndCheck('./a.marko', true /* should write to disk */);
    compileAndCheck('./e.xml.marko', true /* should write to disk */);

    require('marko/node-require').install({
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

    compileAndCheck('./b.marko', false /* should write to disk */);

    markoCompiler.configure(); // Reset to defaults
    expect(markoCompiler.config.writeToDisk).to.equal(true);
    expect(markoCompiler.config.preserveWhitespace).to.equal(false);

    require('marko/node-require').install({
        compilerOptions: {
            writeToDisk: true,
            preserveWhitespace: false
        }
    });

    compileAndCheck('./c.marko', true /* should write to disk */);

    require('marko/node-require').install({
        compilerOptions: {
            preserveWhitespace: false
        }
    });

    markoCompiler.configure({
        writeToDisk: false,
        preserveWhitespace: true
    });

    compileAndCheck('./d.marko', false /* should write to disk */);

    done();
};
