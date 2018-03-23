var expect = require("chai").expect;

function isSameNode(virtualEl, realEl) {
    var vFromEl = realEl.___markoVElement;
    var constId = virtualEl.___constId;
    if (constId !== undefined && vFromEl.___constId === constId) {
        return true;
    }

    return false;
}

module.exports = function(helpers) {
    var div = helpers.vdom.createElement(
        "div",
        null,
        null /* key */,
        null /* component */,
        0 /* childCount */,
        null,
        { i: "abc123" /* key */ }
    );
    var span = helpers.vdom.createElement(
        "span",
        null,
        null /* key */,
        null /* component */,
        0 /* childCount */
    );

    var divClone = div.___cloneNode();
    // expect(div.___isSameNode(divClone)).to.equal(true);
    // expect(divClone.___isSameNode(div)).to.equal(true);
    //
    // expect(div.___isSameNode(span)).to.equal(false);
    // expect(span.___isSameNode(div)).to.equal(false);

    var realDiv = divClone.___actualize(helpers.document);

    expect(isSameNode(div, realDiv)).to.equal(true);
    expect(isSameNode(divClone, realDiv)).to.equal(true);

    var realSpan = span.___actualize(helpers.document);
    expect(isSameNode(div, realSpan)).to.equal(false);

    return div;
};
