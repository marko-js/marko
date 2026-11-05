var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {});

  assert.match(component.el.innerHTML, /foo/);
  assert.doesNotMatch(component.el.innerHTML, /bar/);

  var foo = component.getComponent("child");
  assert.equal(foo.isDestroyed(), false);

  component.state.target = "bar";
  component.update();

  assert.equal(foo.isDestroyed(), true);

  var bar = component.getComponent("child");
  assert.equal(bar.isDestroyed(), false);

  assert.doesNotMatch(component.el.innerHTML, /foo/);
  assert.match(component.el.innerHTML, /bar/);
};
