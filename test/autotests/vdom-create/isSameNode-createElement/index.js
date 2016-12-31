var expect = require('chai').expect;

module.exports = function(helpers) {
    var div = helpers.vdom.createElement('div', null, 0 /* childCount */, 'abc123' /* key */);
    var span = helpers.vdom.createElement('span', null, 0 /* childCount */);

    var divClone = div.$__cloneNode();
    expect(div.isSameNode(divClone)).to.equal(true);
    expect(divClone.isSameNode(div)).to.equal(true);

    expect(div.isSameNode(span)).to.equal(false);
    expect(span.isSameNode(div)).to.equal(false);

    var realDiv = divClone.actualize(helpers.document);
    expect(div.isSameNode(realDiv)).to.equal(true);
    expect(divClone.isSameNode(realDiv)).to.equal(true);

    return div;
};