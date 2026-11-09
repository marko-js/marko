var assert = require("assert/strict");

it("should should have mounted the component", function () {
  assert.notEqual(window.counterComponent, undefined);
});

it("should be interactive", function () {
  var countDisplay = window.counterComponent.getEl("count");
  var btn = window.counterComponent.getEl("button");
  assert.equal(countDisplay.textContent, "Count: 0");
  btn.click();
  window.counterComponent.update();
  assert.equal(countDisplay.textContent, "Count: 1");
});
