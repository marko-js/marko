var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.mouseMoveEvent, undefined);

  helpers.triggerMouseMove(component.getEl("ok"));

  assert.equal(component.mouseMoveEvent[0], "ok");
  assert.equal(typeof component.mouseMoveEvent[1].stopPropagation, "function");
  assert.equal(component.mouseMoveEvent[2].innerHTML, "OK");

  helpers.triggerMouseMove(component.getEl("cancel"));

  assert.equal(component.mouseMoveEvent[0], "cancel");
  assert.equal(typeof component.mouseMoveEvent[1].stopPropagation, "function");
  assert.equal(component.mouseMoveEvent[2].innerHTML, "Cancel");
};
