var nodePath = require("path");
var fs = require("fs");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
    require("marko/compiler").configure({
        writeToDisk: true
    });

    var compiledPath;

    var templatePath = nodePath.join(__dirname, "template.marko");
    compiledPath = nodePath.join(__dirname, "template.marko.js");
    var template = marko.load(templatePath);
    expect(fs.existsSync(compiledPath)).to.equal(true);
    snapshot(template.renderSync({ name: "Frank" }).toString());

    done();
};
