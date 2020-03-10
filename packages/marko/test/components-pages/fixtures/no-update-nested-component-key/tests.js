var expect = require("chai").expect;

it("should render correctly", function() {
  var root = window.root;
  var child = window.child;
  var nestedChild = window.nestedChild;

  expect(root.getComponent("child")).to.eql(child);

  expect(child.getComponent("nested")).to.eql(nestedChild);
  expect(child.getEl("div")).has.property("textContent", "Child");

  expect(nestedChild.getEl("div")).has.property("textContent", "Nested Child");
});
