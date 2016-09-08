var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', 2 /* attrCount */, 0 /* childCount */)
        .a('type', 'checkbox')
        .a('checked', true);

    expect(el.checked).to.equal(true);
    return el;
};