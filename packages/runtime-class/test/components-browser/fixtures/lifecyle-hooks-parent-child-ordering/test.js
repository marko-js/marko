var assert = require("assert/strict");
var hooks = require("./hooks");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });
  assert.deepEqual(hooks.getHookNames(), [
    "root:create",
    "root:render",
    "foo:create",
    "foo:render",
    "foo:mount",
    "root:mount",
  ]);

  hooks.reset();

  component.input = { name: "John" };
  component.update();

  assert.deepEqual(hooks.getHookNames(), [
    "root:render",
    "foo:render",
    "foo:update",
    "root:update",
  ]);
};
