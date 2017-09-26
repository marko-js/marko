var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var templatePath = nodePath.join(__dirname, 'template.marko');
    var template = require(templatePath);
    template.render(
        {
            name: 'John'
        },
        function(err, result) {
            if (err) {
                return done(err);
            }

            helpers.compare(result.toString());
            done();
        });
};
