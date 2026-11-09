var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  var inner = component.getComponent("inner");
  assert.equal(helpers.targetEl.textContent, "Hello world");
  inner.forceUpdate(); // Toggle
  inner.update();
  assert.equal(helpers.targetEl.textContent, "Hello world");
  inner.forceUpdate(); // Toggle
  inner.update();
  assert.equal(helpers.targetEl.textContent, "Hello world");
  component.forceUpdate(); // Break
  component.update();
  assert.equal(helpers.targetEl.textContent, "Hello world");
};
