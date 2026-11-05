var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var barComponent = component.getComponent("myBar");
  assert.equal(barComponent != null, true);
  assert.equal(barComponent.name, "app-bar");
};
