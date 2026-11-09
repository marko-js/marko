var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));
  var buttonComponent = component.getComponent("button");
  var countComponent = component.getComponent("count");

  assert.ok(buttonComponent != null);
  assert.ok(countComponent != null);

  assert.match(buttonComponent.el.innerHTML, /0/);
  assert.equal(buttonComponent.el.className, "app-button app-button-small");

  buttonComponent.setSize("large");
  buttonComponent.update();
  assert.match(buttonComponent.el.innerHTML, /0/);
  assert.equal(buttonComponent.el.className, "app-button app-button-large");

  countComponent.increment();
  countComponent.update();
  assert.match(buttonComponent.el.innerHTML, /1/);

  buttonComponent.setSize("small");
  buttonComponent.update();
  assert.match(buttonComponent.el.innerHTML, /1/);
  assert.equal(buttonComponent.el.className, "app-button app-button-small");
};
