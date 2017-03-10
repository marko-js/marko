var expect = require('chai').expect;

module.exports = function(helpers) {
    var TEXTAREA_FLAGS = 2;
    expect(function() {
        helpers.vdom.createElement('textarea', 0 /* attrCount */, 2 /* childCount */, TEXTAREA_FLAGS)
            .e('div', 0, 0)
            .t('bar');
    }).to.throw('');

    return null;
};
