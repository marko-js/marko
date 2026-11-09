var assert = require("assert/strict");

module.exports = function (helpers) {
  var root = helpers.mount(require.resolve("./index"));
  var container = root.getComponent("container");
  var counter = root.getComponent("counter");

  assert.equal(helpers.targetEl.textContent, "0|0");

  counter.increment();
  counter.update();

  assert.equal(helpers.targetEl.textContent, "0|1");

  container.state.hideOwnCounter = true;
  container.update();

  assert.equal(helpers.targetEl.textContent, "|1");
};
