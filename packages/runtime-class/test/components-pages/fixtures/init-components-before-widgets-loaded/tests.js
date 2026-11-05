var assert = require("assert/strict");

it("should serialize component config down to the browser", function () {
  assert.equal(window.fooComponent.state.name, "app-foo");
});
