var expect = require("chai").expect;

module.exports = function(helpers) {
    var FLAGS = 2; // TEXTAREA

    var textarea = helpers.vdom
        .createElement(
            "textarea",
            null,
            null /* key */,
            null /* component */,
            2 /* childCount */,
            FLAGS
        )
        .t("foo")
        .t("bar");

    expect(textarea.___value).to.equal("foobar");

    return textarea;
};
