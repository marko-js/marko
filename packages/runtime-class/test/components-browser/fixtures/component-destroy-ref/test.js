var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var button1Component = component.getButton1();
  assert.equal(button1Component != null, true);

  component.destroyButton1();

  button1Component = component.getButton1();
  assert.equal(button1Component === undefined, true);
  assert.equal(component.getComponent("simple") == null, true);
};
