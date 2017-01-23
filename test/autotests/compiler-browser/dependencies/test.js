var expect = require('chai').expect;

exports.checkTemplate = function(compiledTemplate) {
    expect(compiledTemplate.dependencies).to.eql([{
        type: 'js',
        path: __filename
    }]);
}