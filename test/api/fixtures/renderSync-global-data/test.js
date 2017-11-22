var nodePath = require('path');

exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var data = {
        name: 'John',
        $global: {
            greeting: 'Greetings'
        }
    };
    var result = template.renderSync(data);
    helpers.compare(result.toString());
    done();
};