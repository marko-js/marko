var assert = require("assert/strict");

it("should update correctly", function () {
  var component = window.component;
  var originalChild = component.getComponent("child");

  // Ensure we can find the child reference and that it has the exposed method.
  assert.ok("method" in originalChild);

  // Trigger a force re-render and ensure reference still exists.
  component.forceUpdate();
  component.update();
  assert.deepEqual(component.getComponent("child"), originalChild);
});
