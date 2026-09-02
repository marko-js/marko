var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {});

  // `getElId` falls back to the component id and otherwise resolves a key.
  expect(component.getElId()).to.equal(component.id);
  expect(component.getElId("first")).to.equal(component.id + "-first");
  expect(component.getElId("item", 2)).to.equal(component.id + "-item_2");

  // The deprecated `els` lists only the element nodes of the root.
  var els = component.els;
  expect(els.length).to.equal(1);
  expect(els[0]).to.equal(component.getEl("root"));

  // Destroying runs the subscribeTo teardown, which removes the DOM listener.
  component.destroy();
  expect(component.isDestroyed()).to.equal(true);
};
