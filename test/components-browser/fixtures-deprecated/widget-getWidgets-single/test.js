var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {});
    expect(widget.getWidgets("bar").length).to.equal(1);
    expect(widget.getWidgets("bar")[0].name).to.equal("app-foo");
};
