var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', { id: 'foo' }, 0 /* childCount */);
    expect(el.id).to.equal('foo');
    return el;
};