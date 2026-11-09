var assert = require("assert/strict");

it("should update correctly", function () {
  var component = window.component;
  var input = component.getEl("input");

  input.focus();
  assert.deepEqual(document.activeElement, input);

  component.state.text = "Updated";
  component.forceUpdate();
  component.update();

  assert.deepEqual(document.activeElement, input);
});
