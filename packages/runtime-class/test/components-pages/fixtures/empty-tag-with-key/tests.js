var assert = require("assert/strict");

it("should allow getEl() with a dynamic component", function () {
  assert.equal(window.dynamic.getEl("test") !== undefined, true);
  assert.equal(window.splitDynamic.getEl("test") !== undefined, true);
});
