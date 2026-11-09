var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var buttonClickCalls = (window.buttonClickCalls = []);

  assert.equal(buttonClickCalls.length, 0);

  helpers.triggerClick(component.getEl("ok"));

  assert.equal(buttonClickCalls.length, 1);

  assert.equal(buttonClickCalls[0][0], "ok");
  assert.equal(typeof buttonClickCalls[0][1].stopPropagation, "function");
  assert.equal(buttonClickCalls[0][2].innerHTML, "OK");

  helpers.triggerClick(component.getEl("cancel"));

  assert.equal(buttonClickCalls.length, 2);

  assert.equal(buttonClickCalls[1][0], "cancel");
  assert.equal(typeof buttonClickCalls[1][1].stopPropagation, "function");
  assert.equal(buttonClickCalls[1][2].innerHTML, "Cancel");
};
