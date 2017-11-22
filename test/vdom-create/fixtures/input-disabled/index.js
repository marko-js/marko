var expect = require('chai').expect;

module.exports = function (helpers) {
    var el = helpers.vdom.createElement('input', { disabled: 'disabled' }, 0 /* childCount */);

    expect(el.disabled).to.equal(true);
    return el;
};