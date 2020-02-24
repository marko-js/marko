var expect = require("chai").expect;

module.exports = function(helpers) {
    var svg = helpers.vdom.createElement(
        "svg",
        null /* attrs */,
        null /* key */,
        null /* component */,
        null /* child count */
    );

    var docFragment = helpers.vdom.createDocumentFragment();
    svg.___appendChild(docFragment);

    var docFragmentClone = docFragment.___cloneNode();
    expect(docFragmentClone.___nextSibling).to.equal(null);
    expect(docFragmentClone.___parentNode == null).to.equal(true);

    return svg;
};
