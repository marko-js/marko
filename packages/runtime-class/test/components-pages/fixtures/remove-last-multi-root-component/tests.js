var assert = require("assert/strict");

it("should remove the child nodes", function () {
  var component = window.testComponent;
  var el = component.getEl("root");

  assert.equal(el.children.length, 2);
  component.toggle();
  component.forceUpdate();
  component.update();
  assert.equal(el.children.length, 0);
  component.toggle();
  component.forceUpdate();
  component.update();
  assert.equal(el.children.length, 2);
});
