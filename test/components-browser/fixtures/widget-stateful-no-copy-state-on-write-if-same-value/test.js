var expect = require("chai").expect;

module.exports = function(helpers) {
    var component = helpers.mount(require.resolve("./index"), {
        size: "large",
        label: "Initial Label"
    });

    var oldState = component.state;
    component.setState("size", "large");
    expect(component.state).to.equal(oldState);
};
