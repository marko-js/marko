var assert = require("assert/strict");
var hooks = require("./hooks");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });

  component.destroy();

  assert.deepEqual(hooks.getHookNames(), ["root:destroy", "foo:destroy"]);
};
