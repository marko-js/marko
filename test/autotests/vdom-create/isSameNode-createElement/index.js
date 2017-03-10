var expect = require('chai').expect;

module.exports = function(helpers) {
    var div = helpers.vdom.createElement('div', null, 0 /* childCount */, null, 'abc123' /* key */);
    var span = helpers.vdom.createElement('span', null, 0 /* childCount */);

    var divClone = div.$__cloneNode();
    expect(div.$__isSameNode(divClone)).to.equal(true);
    expect(divClone.$__isSameNode(div)).to.equal(true);

    expect(div.$__isSameNode(span)).to.equal(false);
    expect(span.$__isSameNode(div)).to.equal(false);

    var realDiv = divClone.actualize(helpers.document);
    expect(div.$__isSameNode(realDiv)).to.equal(true);
    expect(divClone.$__isSameNode(realDiv)).to.equal(true);

    return div;
};
