var nodePath = require("path");
var fs = require("fs");
var requireHook = require("../../../../node-require");

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var compiledPath;

    requireHook.install({
        compilerOptions: {
            writeToDisk: true
        }
    });

    try {
        var templatePath = nodePath.join(__dirname, "template.marko");
        compiledPath = nodePath.join(__dirname, "template.marko.js");
        var template = require(templatePath);
        delete require.cache[templatePath];
        expect(fs.existsSync(compiledPath)).to.equal(true);
        helpers.compare(template.renderSync({ name: "Frank" }).toString());
    } finally {
        fs.unlinkSync(compiledPath);
        requireHook.install({
            compilerOptions: {
                writeToDisk: false
            }
        });
    }

    done();
};
