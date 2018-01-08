var nodePath = require('path');

exports.check = function (marko, markoCompiler, expect, helpers, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    template.renderToString({ name: 'John' }, function (err, html) {
        helpers.compare(html);
        done();
    });
};