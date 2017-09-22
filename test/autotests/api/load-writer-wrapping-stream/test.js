var nodePath = require('path');
var through = require('through');

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var output = '';

    var stream = through(function write(data) {
        output += data;
    });

    var runtimeHtml = require('marko/src/html');

    var out = runtimeHtml.createWriter(stream);
    out
        .on('end', function() {
            helpers.compare(output);
            done();
        })
        .on('error', function(e) {
            done(e);
        });

    var template = marko.load(nodePath.join(__dirname, 'template.marko'));

    template.render({
            name: 'John'
        },
        out).end();
};
