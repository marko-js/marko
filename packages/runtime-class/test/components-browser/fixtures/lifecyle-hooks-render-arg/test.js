var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });

  var out1 = component.renderArg;

  component.input = { name: "John" };
  component.update();

  var out2 = component.renderArg;

  assert.notEqual(out1, out2);
  assert.equal(typeof out1.element, "function");
  assert.equal(typeof out2.element, "function");
};
