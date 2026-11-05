var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));

  var span = component.el.querySelector("span");
  assert.equal(span.className, "test");

  component.update();

  assert.equal(span.className, "test");
};
