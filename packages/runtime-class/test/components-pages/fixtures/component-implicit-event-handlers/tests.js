var assert = require("assert/strict");

it("should have initialized both components", function () {
  var component = window.testComponent;
  assert.equal(component.clicks, 0);
  document.getElementById("a").click();
  assert.equal(component.clicks, 1);
  document.getElementById("b").click();
});
