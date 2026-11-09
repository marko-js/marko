var assert = require("assert/strict");

it("should allow fixed IDs for components", function () {
  var component = window.appFixedId;
  assert.equal(document.getElementById("appFixedId") != null, true);
  component.testGetComponent();
  component.testGetEl();
});
