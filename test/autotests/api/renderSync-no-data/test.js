var nodePath = require('path');

exports.check = function(marko, markoCompiler, expect, done) {
    var template = marko.load(nodePath.join(__dirname, 'template.marko'));
    var result = template.renderSync();
    expect(result.toString()).to.equal('Hello!');
    done();
};