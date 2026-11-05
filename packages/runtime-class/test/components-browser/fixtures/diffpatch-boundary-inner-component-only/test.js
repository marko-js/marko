var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var innerComponent = component.getComponent("inner");

  assert.equal(helpers.targetEl.querySelector(".inner").innerHTML, "0");

  component.state.count++;
  component.update();

  assert.equal(component.getComponent("inner"), innerComponent);

  assert.equal(helpers.targetEl.querySelector(".inner").innerHTML, "1");
};
