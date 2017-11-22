var nodePath = require('path');
var fs = require('fs');

exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var compiledPath;

    require('marko/compiler').configure({
        writeToDisk: true
    });

    try {
        var templatePath = nodePath.join(__dirname, 'template.marko');
        compiledPath = nodePath.join(__dirname, 'template.marko.js');
        var template = require(templatePath);
        delete require.cache[templatePath];
        expect(fs.existsSync(compiledPath)).to.equal(true);
        helpers.compare(template.renderSync({ name: 'Frank' }).toString());
    } finally {
        fs.unlinkSync(compiledPath);
    }

    done();
};