var assert = require("assert/strict");

it("should should have mounted the component", function () {
  assert.notEqual(window.counterComponent, undefined);
});

it("should be interactive", function () {
  var btn = window.counterComponent.getEl("button");
  assert.equal(btn.textContent, "Count: 0");
  btn.click();
  window.counterComponent.update();
  assert.equal(btn.textContent, "Count: 1");
});
