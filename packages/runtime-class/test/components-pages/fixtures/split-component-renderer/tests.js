var assert = require("assert/strict");

it("should allow component to be split from renderer", function () {
  var component = window.appButtonSplit;
  assert.equal(component.el.innerHTML, "Test Button");
  component.setLabel("New Label");
  assert.equal(component.el.innerHTML, "New Label");
});

it("should allow component to be split from renderer and for browser file to export class", function () {
  var component = window.appButtonSplitExportClass;
  assert.equal(component.el.innerHTML, "Test Button");
  component.setLabel("New Label");
  assert.equal(component.el.innerHTML, "New Label");
});

it("should allow UI component to only have a component and an index.marko", function () {
  assert.ok(typeof window.componentOnly === "object" && window.componentOnly !== null);
});
