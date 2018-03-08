var expect = require("chai").expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require.resolve("./index"), {});
    expect(widget.getWidget("bar").name).to.equal("app-foo");
};
