var expect = require('chai').expect;

module.exports = function(helpers) {
    var virtualEl = helpers.vdom.createElement('option', { selected: undefined });

    expect(virtualEl.hasAttributeNS(null, 'selected')).to.equal(false);

    return virtualEl.actualize(helpers.document);
};