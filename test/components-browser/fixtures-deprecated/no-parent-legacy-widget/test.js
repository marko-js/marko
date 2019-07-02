var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {});
    var root = component.el;

    expect(root.querySelector("input"))
        .to.have.property("id")
        .includes("test-input");
};
