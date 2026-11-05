var assert = require("assert/strict");

it("should render top down, mount bottom up", function () {
  assert.deepEqual(window.renders, ["wrapper", "hello", "inner"]);
  assert.deepEqual(window.mounts, ["inner", "hello", "wrapper"]);
});
