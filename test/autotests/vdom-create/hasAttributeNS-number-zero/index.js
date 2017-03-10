var expect = require('chai').expect;

module.exports = function(helpers) {
    var virtualEl = helpers.vdom.createElement('option', { selected: 0 });

    expect(virtualEl.$__hasAttribute('selected')).to.equal(true);

    return virtualEl.actualize(helpers.document);
};
