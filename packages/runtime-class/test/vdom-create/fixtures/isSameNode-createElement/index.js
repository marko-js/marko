var assert = require("assert/strict");
var domData = require("../../../../src/runtime/components/dom-data");
var vElementByDOMNode = domData.___vElementByDOMNode;

function isSameNode(virtualEl, realEl) {
  var vFromEl = vElementByDOMNode.get(realEl);
  var constId = virtualEl.___constId;
  if (constId !== undefined && vFromEl.___constId === constId) {
    return true;
  }

  return false;
}

module.exports = function (helpers) {
  var div = helpers.vdom.createElement(
    "div",
    null,
    null /* key */,
    null /* component */,
    0 /* childCount */,
    null,
    { i: "abc123" /* key */ },
  );
  var span = helpers.vdom.createElement(
    "span",
    null,
    null /* key */,
    null /* component */,
    0 /* childCount */,
  );

  var divClone = div.___cloneNode();
  // assert.equal(div.___isSameNode(divClone), true);
  // assert.equal(divClone.___isSameNode(div), true);
  //
  // assert.equal(div.___isSameNode(span), false);
  // assert.equal(span.___isSameNode(div), false);

  var realDiv = divClone.___actualize(helpers.document);

  assert.equal(isSameNode(div, realDiv), true);
  assert.equal(isSameNode(divClone, realDiv), true);

  var realSpan = span.___actualize(helpers.document);
  assert.equal(isSameNode(div, realSpan), false);

  return div;
};
