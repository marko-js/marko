var assert = require("assert/strict");

it("should initialize components before ready", function () {
  assert.equal(window.afterInitComponents_foo != null, true);
  assert.equal(window.afterInitComponents_bar == null, true);

  assert.equal(window.fooComponent != null, true);
  assert.equal(window.barComponent != null, true);

  assert.equal(typeof window.fooComponent.id, "string");
  assert.equal(typeof window.barComponent.id, "string");
});
