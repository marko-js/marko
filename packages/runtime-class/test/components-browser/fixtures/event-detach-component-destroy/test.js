var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(helpers.targetEl.querySelector(".root") != null, true);

  assert.equal(component.detachEvent, undefined);
  component.destroy();

  assert.equal(helpers.targetEl.querySelector(".root") != null, true);
  assert.equal(component.detachEvent != null, true);

  component.detachEvent.detach();
  assert.equal(helpers.targetEl.querySelector(".root") == null, true);
};
