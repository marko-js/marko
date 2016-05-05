var nodePath = require('path');
var through = require('through');

exports.check = function(marko, markoCompiler, expect, done) {
    var output = '';

    var stream = through(function write(data) {
        output += data;
    });

    stream.on('end', function() {
            expect(output).to.equal('bar');
            done();
        })
        .on('error', function(e) {
            done(e);
        });

    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    template.render(
        {
            $global: {
                foo: 'bar'
            }
        },
        stream);
};