var expect = require('chai').expect;

module.exports = function(helpers) {
    var virtualEl = helpers.vdom.createElement('option', { selected: '' });

    expect(virtualEl.hasAttributeNS(null, 'selected')).to.equal(true);

    return virtualEl.actualize(helpers.document);
};