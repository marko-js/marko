var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.buttonClickCalls.length, 0);

  helpers.triggerClick(component.getEl("ok"));

  assert.equal(component.buttonClickCalls.length, 1);

  assert.equal(component.buttonClickCalls[0][0], "ok");
  assert.equal(typeof component.buttonClickCalls[0][1].stopPropagation, "function");
  assert.equal(component.buttonClickCalls[0][2].innerHTML, "OK");

  helpers.triggerClick(component.getEl("cancel"));

  assert.equal(component.buttonClickCalls.length, 2);

  assert.equal(component.buttonClickCalls[1][0], "cancel");
  assert.equal(typeof component.buttonClickCalls[1][1].stopPropagation, "function");
  assert.equal(component.buttonClickCalls[1][2].innerHTML, "Cancel");
};
