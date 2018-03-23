var expect = require("chai").expect;

module.exports = function(helpers) {
    var SVG_FLAGS = 1; // SVG

    var svg = helpers.vdom.createElement(
        "svg",
        null /* attrs */,
        null /* key */,
        null /* component */,
        null /* child count */,
        SVG_FLAGS
    );

    var docFragment = helpers.vdom.createDocumentFragment();
    svg.___appendChild(docFragment);

    expect(svg.___namespaceURI).to.equal("http://www.w3.org/2000/svg");

    var docFragmentClone = docFragment.___cloneNode();
    expect(docFragmentClone.___nextSibling).to.equal(null);
    expect(docFragmentClone.___parentNode == null).to.equal(true);

    return svg;
};
