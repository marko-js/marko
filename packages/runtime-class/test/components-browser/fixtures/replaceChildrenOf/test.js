var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  var initialCounter = component.getComponent("initialCounter");

  var counter = require("./components/app-counter").default;

  var renderTarget = component.getEl("renderTarget");
  assert.match(renderTarget.innerHTML, /Count: 0/);

  counter.renderSync({ value: 99 }).replaceChildrenOf(renderTarget);

  assert.doesNotMatch(renderTarget.innerHTML, /Count: 0/);
  assert.match(renderTarget.innerHTML, /Count: 99/);
  assert.equal(initialCounter.isDestroyed(), true);
};
