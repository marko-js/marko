var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {
        interactive: true
    });

    expect(widget.el).to.be.instanceOf(HTMLButtonElement);

    widget.setState("interactive", false);
    widget.update();

    expect(widget.el).to.equal(undefined);

    widget.setState("interactive", true);
    widget.update();

    expect(widget.el).to.be.instanceOf(HTMLButtonElement);
};
