var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    template.renderToString({ name: 'John' }, function(err, html) {
        expect(html).to.equal('Hello John!');
        done();
    });

};