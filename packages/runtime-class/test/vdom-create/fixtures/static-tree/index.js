var assert = require("assert/strict");

module.exports = function (helpers) {
  var link = helpers.vdom
    .createElement(
      "a",
      { href: "http://ebay.com" },
      null /* key */,
      null /* component */,
      1 /* childCount */,
    )
    .t("eBay");

  var el = helpers.vdom
    .createElement(
      "div",
      { class: "foo", onclick: "doSomething()" },
      null /* key */,
      null /* component */,
      2 /* childCount */,
    )
    .n(link)
    .e("span", null, null /* key */, null /* component */, 0);

  var linkClone = el.___firstChild;

  assert.notEqual(linkClone, link);
  assert.equal(link.___parentNode, null);
  assert.equal(link.___nextSibling, null);

  assert.equal(linkClone.___nextSibling.___nodeName, "span");
  assert.equal(linkClone.___parentNode.___nodeName, "div");

  return el;
};
