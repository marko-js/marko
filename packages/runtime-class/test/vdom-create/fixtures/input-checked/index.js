var assert = require("assert/strict");

module.exports = function (helpers) {
  var el = helpers.vdom.createElement(
    "input",
    { type: "checkbox", checked: true },
    0 /* childCount */,
  );

  assert.equal(el.___attributes.checked, true);
  return el;
};
