var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.mouseMoveEvent, undefined);

  var rootEl = helpers.targetEl.querySelector("div");
  helpers.triggerMouseMove(rootEl);
  assert.equal(component.mouseMoveEvent, true);

  component.state.div = false;
  component.update();

  assert.equal(helpers.targetEl.querySelector("div") == null, true);

  component.mouseMoveEvent = undefined;

  rootEl = helpers.targetEl.querySelector("span");
  helpers.triggerMouseMove(rootEl);
  assert.equal(component.mouseMoveEvent, true);
};
