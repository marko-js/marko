var assert = require("assert/strict");

it("should mount implicit components with tag params", function () {
  assert.equal(window.helloImplicitComponentSent, true);
});
