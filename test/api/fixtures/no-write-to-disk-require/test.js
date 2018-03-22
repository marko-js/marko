var nodePath = require("path");
var fs = require("fs");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    markoCompiler.defaultOptions.writeToDisk = false;
    try {
        var templatePath = nodePath.join(__dirname, "template.marko");
        var compiledPath = nodePath.join(__dirname, "template.marko.js");
        var template = require(templatePath);
        expect(fs.existsSync(compiledPath)).to.equal(false);
        expect(template.render).to.be.a("function");
        snapshot(template.renderSync({ name: "Frank" }).toString());
    } finally {
        markoCompiler.defaultOptions.writeToDisk = true;
    }

    done();
};
