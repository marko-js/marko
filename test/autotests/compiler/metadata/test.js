var expect = require('chai').expect;
var config = require('marko/compiler/config');
var oldMeta = config.meta;

config.meta = true;

exports.checkTemplate = function(template) {
    var dependencies = template.getDependencies();
    config.meta = oldMeta;
    expect(dependencies).to.eql([
        { type:'require', path:require.resolve('./tags/test-hello/bar.js') },
        { type:'require', path:require.resolve('./foo.js') }
    ]);
};
