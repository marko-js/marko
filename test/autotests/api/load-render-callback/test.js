var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    template.render({
            name: 'John'
        },
        function(err, result, out) {
            if (err) {
                return done(err);
            }

            expect(result.toString()).to.equal(out.getOutput());
            expect(result.toString()).to.equal('Hello John!');
            done();
        });
};