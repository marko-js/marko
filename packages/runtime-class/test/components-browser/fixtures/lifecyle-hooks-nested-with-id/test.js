var assert = require("assert/strict");
var hooks = require("./hooks");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });

  assert.equal(component.el.querySelector(".foo .name").innerHTML, "Frank");
  assert.deepEqual(hooks.getHookNames("foo"), [
    "create",
    "render",
    "mount",
  ]);
  assert.deepEqual(hooks.getHookNames("root"), [
    "create",
    "render",
    "mount",
  ]);

  hooks.reset();

  component.input = { name: "John" };
  component.update();

  assert.equal(component.el.querySelector(".foo .name").innerHTML, "John");
  assert.deepEqual(hooks.getHookNames("foo"), ["render", "update"]);
  assert.deepEqual(hooks.getHookNames("root"), ["render", "update"]);
};
