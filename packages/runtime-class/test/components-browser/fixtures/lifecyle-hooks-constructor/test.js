var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });
  assert.equal(component.el.querySelector(".name").innerHTML, "Frank");
  assert.deepEqual(component.onInputCalls, [
    {
      name: "INITIAL",
    },
  ]);
  assert.equal(component.name, "Frank");

  component.input = { name: "John" };
  component.update();

  assert.deepEqual(component.onInputCalls, [
    {
      name: "INITIAL",
    },
    {
      name: "Frank",
    },
  ]);

  assert.equal(component.el.querySelector(".name").innerHTML, "John");
  assert.equal(component.name, "John");
};
