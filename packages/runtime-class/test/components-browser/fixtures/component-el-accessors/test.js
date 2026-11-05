var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {});

  // `getElId` falls back to the component id and otherwise resolves a key.
  assert.equal(component.getElId(), component.id);
  assert.equal(component.getElId("first"), component.id + "-first");
  assert.equal(component.getElId("item", 2), component.id + "-item_2");

  // The deprecated `els` lists only the element nodes of the root.
  var els = component.els;
  assert.equal(els.length, 1);
  assert.equal(els[0], component.getEl("root"));

  // Destroying runs the subscribeTo teardown, which removes the DOM listener.
  component.destroy();
  assert.equal(component.isDestroyed(), true);
};
