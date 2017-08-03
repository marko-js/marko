var expect = require('chai').expect;

module.exports = function(helpers) {
    var el = helpers.vdom.createElement('input', { value: 'foo' }, null /* key */, null /* component */, 0 /* childCount */);

    expect(el.___value).to.equal('foo');
    return el;
};
