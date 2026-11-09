var assert = require("assert/strict");

module.exports = function (helpers) {
  var FLAGS = 2; // TEXTAREA

  var textarea = helpers.vdom
    .createElement(
      "textarea",
      null,
      null /* key */,
      null /* component */,
      2 /* childCount */,
      FLAGS,
    )
    .t("foo")
    .t("bar");

  assert.equal(textarea.___textContent, "foobar");

  return textarea;
};
