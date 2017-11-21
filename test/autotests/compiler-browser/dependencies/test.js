var expect = require('chai').expect;

exports.checkTemplate = function(compiledTemplate) {
    expect(compiledTemplate.dependencies).to.eql([{
        type: 'require',
        run: true,
        path: __filename
    }]);
}