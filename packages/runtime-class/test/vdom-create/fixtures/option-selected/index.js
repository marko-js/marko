var assert = require("assert/strict");

module.exports = function (helpers) {
  var el = helpers.vdom.createElement(
    "option",
    { selected: "" },
    0 /* childCount */,
  );
  assert.equal(el.___attributes.selected, "");
  return el;
};
