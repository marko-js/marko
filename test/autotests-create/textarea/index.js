var expect = require('chai').expect;

module.exports = function(helpers) {
    var textarea = helpers.vdom.createElement('textarea', 0 /* attrCount */, 2 /* childCount */)
        .t('foo')
        .t('bar');

    expect(textarea.value).to.equal('foobar');

    return textarea;
};