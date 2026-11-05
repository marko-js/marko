var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    age: 30,
  });
  var fooComponent = component.getComponent("foo");
  assert.equal(fooComponent != null, true);
  assert.equal(fooComponent.getName(), "Frank");
  assert.equal(fooComponent.getAge(), "30");
};
