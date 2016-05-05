var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    template.render({
            name: 'John'
        },
        function(err, output) {
            if (err) {
                return done(err);
            }

            expect(output).to.equal('Hello John!');
            done();
        });
};