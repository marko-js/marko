var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    className: "foo",
  });

  var span = component.el.querySelector("span");
  assert.equal(span.className, "foo");

  component.setState("className", "bar");
  component.update();

  assert.equal(span.className, "foo");
};
