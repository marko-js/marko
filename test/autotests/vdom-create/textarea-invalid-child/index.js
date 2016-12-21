var expect = require('chai').expect;

module.exports = function(helpers) {
    expect(function() {
        helpers.vdom.createElement('textarea', 0 /* attrCount */, 2 /* childCount */)
            .e('div', 0, 0)
            .t('bar');
    }).to.throw('');

    return null;
};