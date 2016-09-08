var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', 1 /* attrCount */, 0 /* childCount */)
        .a('disabled', 'disabled');

    expect(el.disabled).to.equal(true);
    return el;
};