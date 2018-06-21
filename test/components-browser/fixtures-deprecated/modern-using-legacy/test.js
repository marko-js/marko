var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./template.marko"), {
        name: "Frank"
    });
    var widget = component.getComponent("legacy-widget");

    expect(widget.el.innerHTML).to.contain("Hello Frank!");

    widget.setName("Jane");
    widget.update();

    expect(widget.el.innerHTML).to.contain("Hello Jane!");
};
