var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {});

    var el = widget.getEl("transitive");

    expect(el.tagName).to.eql("BUTTON");
};
