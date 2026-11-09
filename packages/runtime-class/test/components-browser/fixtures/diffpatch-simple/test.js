var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var rootEl = component.el;
  var spanEl = rootEl.querySelector("span");

  component.state.count = 1;
  component.update();

  assert.equal(component.el, rootEl);
  assert.equal(rootEl.querySelector("span").innerHTML, "1");
  assert.equal(rootEl.querySelector("span"), spanEl);
};
