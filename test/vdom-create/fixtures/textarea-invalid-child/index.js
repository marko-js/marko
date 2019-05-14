var expect = require("chai").expect;

module.exports = function(helpers) {
    expect(function() {
        helpers.vdom
            .createElement(
                "textarea",
                {},
                null /* key */,
                null /* component */,
                2 /* childCount */
            )
            .e("div", {}, null /* key */, null /* component */, 0)
            .t("bar");
    }).to.throw("");

    return null;
};
