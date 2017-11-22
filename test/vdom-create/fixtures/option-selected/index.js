var expect = require('chai').expect;

module.exports = function (helpers) {
    var el = helpers.vdom.createElement('option', { 'selected': '' }, 0 /* childCount */);
    expect(el.selected).to.equal(true);
    return el;
};