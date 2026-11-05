var assert = require("assert/strict");

module.exports = function (helpers) {
  var el = helpers.vdom.createElement(
    "input",
    { value: "foo" },
    null /* key */,
    null /* component */,
    0 /* childCount */,
  );

  assert.equal(el.___attributes.value, "foo");
  return el;
};
