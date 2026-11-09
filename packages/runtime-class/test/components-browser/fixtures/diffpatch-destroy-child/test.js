var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var rootEl = component.el;
  var helloCountEl = rootEl.querySelector("span.hello-count");
  var helloComponent = component.getComponent("hello");

  component.state.count = 1;
  component.update();

  assert.equal(component.el, rootEl);
  assert.equal(rootEl.querySelector("span.hello-count").innerHTML, "1");
  assert.equal(rootEl.querySelector("span.hello-count"), helloCountEl);

  component.state.renderHello = false;
  component.update();

  assert.equal(helloComponent.isDestroyed(), true);
  assert.equal(helloComponent.el == null, true);
};
