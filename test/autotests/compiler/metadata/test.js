var expect = require('chai').expect;
var config = require('../../../../compiler/config');
var oldMeta = config.meta;

config.meta = true;

exports.checkTemplate = function(template) {
    template.render();
    var dependencies = template.getDependencies();
    config.meta = oldMeta;
    expect(dependencies).to.eql([
        { type:'require', path:require.resolve('./tags/test-hello/bar.js') },
        { type:'require', path:require.resolve('./foo.js') }
    ]);
}