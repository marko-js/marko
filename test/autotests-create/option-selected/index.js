var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('option', 1 /* attrCount */, 0 /* childCount */)
        .a('selected', '');

    expect(el.selected).to.equal(true);
    return el;
};