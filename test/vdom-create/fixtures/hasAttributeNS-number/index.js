var expect = require('chai').expect;

module.exports = function (helpers) {
    var virtualEl = helpers.vdom.createElement('option', { selected: 1 });

    expect(virtualEl.___hasAttribute('selected')).to.equal(true);

    return virtualEl;
};