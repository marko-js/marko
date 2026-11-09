var assert = require("assert/strict");

it("should render correctly", function () {
  var root = window.root;
  var child = window.child;
  var nestedChild = window.nestedChild;

  assert.deepEqual(root.getComponent("child"), child);

  assert.deepEqual(child.getComponent("nested"), nestedChild);
  assert.equal(child.getEl("div").textContent, "Child");

  assert.equal(nestedChild.getEl("div").textContent, "Nested Child");
});
