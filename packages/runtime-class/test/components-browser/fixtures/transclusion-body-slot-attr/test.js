var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });

  var buttonComponent = component.getComponent("button");
  assert.match(buttonComponent.el.innerHTML, /Frank/);
  assert.equal(buttonComponent.el.className, "app-button app-button-small");

  // Button component will not rerender since it's state did not change and that means that the
  // button content will remain as 'John' instead of 'Frank'
  component.input = { name: "John " };
  component.update();

  assert.match(buttonComponent.el.innerHTML, /John/);

  buttonComponent.setSize("large");
  buttonComponent.update();
  assert.match(buttonComponent.el.innerHTML, /John/);
  assert.equal(buttonComponent.el.className, "app-button app-button-large");
};
