var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', { value: 'foo' }, 0 /* childCount */);

    expect(el.value).to.equal('foo');
    return el;
};