var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', 1 /* attrCount */, 0 /* childCount */)
        .a('value', 'foo');

    expect(el.value).to.equal('foo');
    return el;
};