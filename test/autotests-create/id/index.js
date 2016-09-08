var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', 1 /* attrCount */, 0 /* childCount */)
        .a('id', 'foo');

    expect(el.id).to.equal('foo');
    return el;
};