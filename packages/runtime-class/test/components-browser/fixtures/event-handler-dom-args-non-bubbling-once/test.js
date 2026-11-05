var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.mouseMoveEvent, undefined);

  // First button
  helpers.triggerMouseMove(component.getEl("ok"));

  assert.equal(component.mouseMoveEventCalls.length, 1);
  assert.equal(component.mouseMoveEventCalls[0][0], "ok");
  assert.equal(typeof component.mouseMoveEventCalls[0][1].stopPropagation, "function");
  assert.equal(component.mouseMoveEventCalls[0][2].innerHTML, "OK");

  helpers.triggerMouseMove(component.getEl("ok"));
  assert.equal(component.mouseMoveEventCalls.length, 1);

  // Second button
  helpers.triggerMouseMove(component.getEl("cancel"));

  assert.equal(component.mouseMoveEventCalls.length, 2);
  assert.equal(component.mouseMoveEventCalls[1][0], "cancel");
  assert.equal(typeof component.mouseMoveEventCalls[1][1].stopPropagation, "function");
  assert.equal(component.mouseMoveEventCalls[1][2].innerHTML, "Cancel");

  helpers.triggerMouseMove(component.getEl("cancel"));
  assert.equal(component.mouseMoveEventCalls.length, 2);
};
