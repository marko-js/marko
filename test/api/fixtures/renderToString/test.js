var nodePath = require('path');

exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var result = template.renderToString({ name: 'John' });
    helpers.compare(result);
    done();
};