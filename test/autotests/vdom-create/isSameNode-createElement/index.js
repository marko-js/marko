var expect = require('chai').expect;

function isSameNode(virtualEl, realEl) {
    var constId = virtualEl.$__constId;
    if (constId !== undefined) {
        var otherProps = realEl._vprops;
        if (otherProps !== undefined && constId === otherProps.c) {
            return true;
        }
    }

    return false;
}

module.exports = function(helpers) {
    var div = helpers.vdom.createElement('div', null, 0 /* childCount */, null, {c: 'abc123'} /* key */);
    var span = helpers.vdom.createElement('span', null, 0 /* childCount */);

    var divClone = div.$__cloneNode();
    // expect(div.$__isSameNode(divClone)).to.equal(true);
    // expect(divClone.$__isSameNode(div)).to.equal(true);
    //
    // expect(div.$__isSameNode(span)).to.equal(false);
    // expect(span.$__isSameNode(div)).to.equal(false);

    var realDiv = divClone.actualize(helpers.document);
    expect(isSameNode(div, realDiv)).to.equal(true);
    expect(isSameNode(divClone, realDiv)).to.equal(true);

    var realSpan = span.actualize(helpers.document);
    expect(isSameNode(div, realSpan)).to.equal(false);

    return div;
};
