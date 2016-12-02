var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var result = template.renderToString({ name: 'John' });
    expect(result).to.equal('Hello John!');
    done();
};