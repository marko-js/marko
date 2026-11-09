var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./"), {});

  var oldState = component.state.toJSON();
  component.setState("foo", "bar");

  assert.notEqual(component.state.toJSON(), oldState);

  oldState = component.state.toJSON();
  component.setState("hello", "world");
  assert.equal(component.state.toJSON(), oldState);
};
