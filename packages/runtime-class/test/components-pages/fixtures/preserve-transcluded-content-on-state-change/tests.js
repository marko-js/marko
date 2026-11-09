var assert = require("assert/strict");

it("should update correctly", function () {
  var component = window.component;
  var $button = component.getEl("button");
  assert.deepEqual($button.textContent, "button label");

  $button.click();
  component.update();

  assert.deepEqual($button.textContent, "button labeltest");
});
