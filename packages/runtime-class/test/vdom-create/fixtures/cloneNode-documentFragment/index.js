var assert = require("assert/strict");

module.exports = function (helpers) {
  var svg = helpers.vdom.createElement(
    "svg",
    null /* attrs */,
    null /* key */,
    null /* component */,
    null /* child count */,
  );

  var docFragment = helpers.vdom.createDocumentFragment();
  svg.___appendChild(docFragment);

  var docFragmentClone = docFragment.___cloneNode();
  assert.equal(docFragmentClone.___nextSibling, null);
  assert.equal(docFragmentClone.___parentNode == null, true);

  return svg;
};
