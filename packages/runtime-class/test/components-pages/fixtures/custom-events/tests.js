var assert = require("assert/strict");

it("should invoke event handler method for custom events with extra args", function () {
  var component = window.fooComponent;

  component.pressEvent = null;

  component.getComponent("ok").emitPressEvent();

  assert.equal(component.pressEvent[0].type, "ok");
  assert.equal(component.pressEvent[1].component, component.getComponent("ok"));

  component.getComponent("cancel").emitPressEvent();

  assert.equal(component.pressEvent[0].type, "cancel");
  assert.equal(component.pressEvent[1].component, component.getComponent("cancel"));
});
