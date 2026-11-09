var assert = require("assert/strict");

it("should not mount implicit components with macros that have tag parameters", function () {
  assert.equal(window.helloImplicitComponentSent, undefined);
});
