var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var templatePath = nodePath.join(__dirname, 'template.marko');
    var template = require(templatePath);
    template.render(
        {
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