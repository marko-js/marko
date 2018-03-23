var expect = require("chai").expect;

module.exports = function(helpers) {
    var TEXTAREA_FLAGS = 2;
    expect(function() {
        helpers.vdom
            .createElement(
                "textarea",
                {},
                null /* key */,
                null /* component */,
                2 /* childCount */,
                TEXTAREA_FLAGS
            )
            .e("div", {}, null /* key */, null /* component */, 0)
            .t("bar");
    }).to.throw("");

    return null;
};
