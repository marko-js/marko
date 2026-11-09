var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {});

  var foo = component.getComponent("foo");
  assert.match(foo.el.innerHTML, /count:0/);

  foo.state.count++;
  foo.update();

  assert.equal(component.isDestroyed(), false);
  assert.equal(foo.isDestroyed(), false);
  assert.match(foo.el.innerHTML, /count:1/);
};
