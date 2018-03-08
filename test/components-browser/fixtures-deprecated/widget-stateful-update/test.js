var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {
        size: "large",
        label: "Initial Label"
    });

    expect(widget.el.className).to.contain("large");

    widget.setSize("small");
    widget.update();

    expect(widget.el.className).to.contain("small");
};
