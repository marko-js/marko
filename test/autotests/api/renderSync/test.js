var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var output = template.renderSync({ name: 'John' });
    expect(output).to.equal('Hello John!');
    done();
};