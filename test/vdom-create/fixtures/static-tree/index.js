var expect = require("chai").expect;

module.exports = function(helpers) {
    var link = helpers.vdom
        .createElement(
            "a",
            { href: "http://ebay.com" },
            null /* key */,
            null /* component */,
            1 /* childCount */
        )
        .t("eBay");

    var el = helpers.vdom
        .createElement(
            "div",
            { class: "foo", onclick: "doSomething()" },
            null /* key */,
            null /* component */,
            2 /* childCount */
        )
        .n(link)
        .e("span", null, null /* key */, null /* component */, 0);

    var linkClone = el.___firstChild;

    expect(linkClone).to.not.equal(link);
    expect(link.___parentNode).to.equal(null);
    expect(link.___nextSibling).to.equal(null);

    expect(linkClone.___nextSibling.___nodeName).to.equal("span");
    expect(linkClone.___parentNode.___nodeName).to.equal("div");

    return el;
};
