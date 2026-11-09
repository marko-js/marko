var assert = require("assert/strict");

it("should mount explicit components", function () {
  assert.equal(window.helloExplicitComponent != null, true);
});

it("should mount implicit components nested in an explicit component", function () {
  assert.equal(window.helloExplicitComponent.getComponent("nested") != null, true);
});
