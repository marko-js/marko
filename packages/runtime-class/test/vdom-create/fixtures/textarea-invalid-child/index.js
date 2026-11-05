var assert = require("assert/strict");

module.exports = function (helpers) {
  assert.throws(function () {
    helpers.vdom
      .createElement(
        "textarea",
        {},
        null /* key */,
        null /* component */,
        2 /* childCount */,
      )
      .e("div", {}, null /* key */, null /* component */, 0)
      .t("bar");
  });

  return null;
};
