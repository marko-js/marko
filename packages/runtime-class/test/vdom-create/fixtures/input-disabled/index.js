var assert = require("assert/strict");

module.exports = function (helpers) {
  var el = helpers.vdom.createElement(
    "input",
    { disabled: "disabled" },
    0 /* childCount */,
  );

  assert.equal(el.___attributes.disabled, "disabled");
  return el;
};
