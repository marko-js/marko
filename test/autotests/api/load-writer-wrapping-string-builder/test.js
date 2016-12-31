var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var runtimeHtml = require('marko/html');

    var out = runtimeHtml.createWriter();
    out
        .on('finish', function(result) {
            expect(result.getOutput()).to.equal('Hello John!');
            done();
        })
        .on('error', function(e) {
            done(e);
        });

    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    template.render({
            name: 'John'
        },
        out);

    out.end();
};