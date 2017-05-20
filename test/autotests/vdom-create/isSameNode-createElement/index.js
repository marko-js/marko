var expect = require('chai').expect;

function isSameNode(virtualEl, realEl) {
    var constId = virtualEl.___constId;
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

    var divClone = div.___cloneNode();
    // expect(div.___isSameNode(divClone)).to.equal(true);
    // expect(divClone.___isSameNode(div)).to.equal(true);
    //
    // expect(div.___isSameNode(span)).to.equal(false);
    // expect(span.___isSameNode(div)).to.equal(false);

    var realDiv = divClone.actualize(helpers.document);
    expect(isSameNode(div, realDiv)).to.equal(true);
    expect(isSameNode(divClone, realDiv)).to.equal(true);

    var realSpan = span.actualize(helpers.document);
    expect(isSameNode(div, realSpan)).to.equal(false);

    return div;
};
