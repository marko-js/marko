var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });
  assert.equal(component.el.querySelector(".name").innerHTML, "Frank");
  assert.deepEqual(component.hookNames, ["create", "render", "mount"]);
  component.reset();

  component.input = { name: "John" };
  component.update();

  assert.equal(component.el.querySelector(".name").innerHTML, "John");
  assert.deepEqual(component.hookNames, ["render", "update"]);
};
