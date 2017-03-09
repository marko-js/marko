var expect = require('chai').expect;

module.exports = function(helpers) {
    var FLAGS = 2; // TEXTAREA

    var textarea = helpers.vdom.createElement('textarea', null, 2 /* childCount */, null, FLAGS)
        .t('foo')
        .t('bar');

    expect(textarea.value).to.equal('foobar');

    return textarea;
};
