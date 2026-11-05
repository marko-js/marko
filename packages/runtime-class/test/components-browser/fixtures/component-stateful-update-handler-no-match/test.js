var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var oldEl = component.el;

  var button1Component = component.getComponent("button1");
  var button2Component = component.getComponent("button2");

  assert.match(button1Component.el.className, /small/);
  assert.match(button2Component.el.className, /small/);

  assert.match(button1Component.el.innerHTML, /Initial Label/);
  assert.match(button2Component.el.innerHTML, /Initial Label/);

  component.setState("buttonSize", "large");
  component.setState("buttonLabel", "New Label"); // buttonLabel does not have an update handler
  component.update();

  assert.match(button1Component.el.className, /large/);
  assert.match(button2Component.el.className, /large/);

  assert.match(button1Component.el.innerHTML, /New Label/);
  assert.match(button2Component.el.innerHTML, /New Label/);

  assert.equal(component.el, oldEl);
};
