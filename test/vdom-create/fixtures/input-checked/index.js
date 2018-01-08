var expect = require('chai').expect;

module.exports = function (helpers) {
    var el = helpers.vdom.createElement('input', { type: 'checkbox', checked: true }, 0 /* childCount */);

    expect(el.checked).to.equal(true);
    return el;
};