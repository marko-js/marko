var assert = require("assert/strict");

it("should allow getEl() with a split component", function () {
  var hello = window.hello;
  assert.equal(hello.getEl("button") != null, true);
  assert.equal(hello.getEl("button").nodeName, "BUTTON");
});
