var expect = require("chai").expect;

module.exports = function (helpers) {
  var root = helpers.mount(require.resolve("./index"));
  var container = root.getComponent("container");
  var counter = root.getComponent("counter");

  expect(helpers.targetEl.textContent).to.equal("0|0");

  counter.increment();
  counter.update();

  expect(helpers.targetEl.textContent).to.equal("0|1");

  container.state.hideOwnCounter = true;
  container.update();

  expect(helpers.targetEl.textContent).to.equal("|1");
};
