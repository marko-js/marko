var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.getComponent("ok").emitPressEvent();

  assert.equal(component.pressEvent[0].type, "ok");
  assert.equal(component.pressEvent[1].component, component.getComponent("ok"));

  component.getComponent("cancel").emitPressEvent();

  assert.equal(component.pressEvent[0].type, "cancel");
  assert.equal(component.pressEvent[1].component, component.getComponent("cancel"));
};
