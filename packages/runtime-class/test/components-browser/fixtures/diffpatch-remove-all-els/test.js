var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(helpers.targetEl.querySelector("h1") != null, true);
  assert.equal(helpers.targetEl.querySelector("div") != null, true);

  component.state.show = false;
  component.update();

  assert.equal(helpers.targetEl.querySelector("h1") == null, true);
  assert.equal(helpers.targetEl.querySelector("div") == null, true);

  assert.equal(component.isDestroyed(), false);
};
