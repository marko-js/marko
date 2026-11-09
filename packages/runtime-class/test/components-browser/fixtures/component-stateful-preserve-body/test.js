var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var button1Component = component.getComponent("button1");

  assert.match(button1Component.el.innerHTML, /Initial Button Label/);
  assert.match(button1Component.el.className, /large/);

  button1Component.setSize("small");
  button1Component.update();

  assert.match(button1Component.el.innerHTML, /Initial Button Label/);
  assert.match(button1Component.el.className, /small/);

  component.setState("buttonLabel", "New Button Label");
  component.update();

  assert.match(button1Component.el.innerHTML, /New Button Label/);
  assert.match(button1Component.el.className, /large/); // Size will revert back to large since it was not driven by state
};
