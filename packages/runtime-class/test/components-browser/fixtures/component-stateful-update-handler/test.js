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
  component.update();

  assert.equal(button1Component, component.getComponent("button1"));
  assert.equal(button2Component, component.getComponent("button2"));

  assert.match(button1Component.el.className, /large/);
  assert.match(button2Component.el.className, /small/);

  assert.match(button1Component.el.innerHTML, /Initial Label/);
  assert.match(button2Component.el.innerHTML, /Initial Label/);

  assert.equal(component.el, oldEl);
};
