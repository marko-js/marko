var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  // var rootEl = component.el;
  var helloComponent = component.getComponent("hello");
  assert.equal(component.getEl("root").querySelector(".hello") != null, true);
  // assert.equal(helloComponent.el.parentNode, rootEl);

  component.state.insertEl = true;
  component.state.count++;
  component.update();

  assert.equal(component.getEl("root").querySelector(".hello") != null, true);

  assert.equal(component.getComponent("hello"), helloComponent);
};
