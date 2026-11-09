var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.clearLog();
  helpers.triggerMouseEvent(document.getElementById("dom-button"), "click");
  helpers.triggerMouseEvent(document.getElementById("custom-button"), "click");
  assert.deepEqual(component.logOutput, ["dom:click", "custom:click"]);

  helpers.triggerMouseEvent(document.getElementById("toggle"), "click");
  component.update();

  component.clearLog();
  helpers.triggerMouseEvent(document.getElementById("dom-button"), "click");
  helpers.triggerMouseEvent(document.getElementById("custom-button"), "click");
  assert.deepEqual(component.logOutput, []);
};
