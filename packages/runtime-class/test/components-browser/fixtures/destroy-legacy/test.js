var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.getComponent("bar") == null, false);

  component.getComponent("bar").destroy();

  assert.equal(component.getComponent("bar") == null, true);
};
