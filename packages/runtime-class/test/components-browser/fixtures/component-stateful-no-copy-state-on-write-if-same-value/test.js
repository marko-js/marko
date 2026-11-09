var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    size: "large",
    label: "Initial Label",
  });

  var oldState = component.state;
  component.setState("size", "large");
  assert.equal(component.state, oldState);
};
