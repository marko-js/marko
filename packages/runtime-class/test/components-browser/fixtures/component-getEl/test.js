var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(component.getEl("foo").className, "foo");
  assert.equal(component.getEl("bar").className, "bar");
  assert.equal(component.getEl("foo-bar").className, "foo-bar");
};
