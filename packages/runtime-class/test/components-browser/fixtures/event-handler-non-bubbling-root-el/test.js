var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.mouseMoveEvent, undefined);

  var rootEl = helpers.targetEl.querySelector("div");

  helpers.triggerMouseMove(rootEl);

  assert.equal(component.mouseMoveEvent, true);
};
