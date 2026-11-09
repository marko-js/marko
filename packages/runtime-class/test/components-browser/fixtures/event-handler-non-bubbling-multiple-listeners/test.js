var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.getEl("foo").focus();
  assert.equal(component.fooCallCount, 1);
  assert.equal(component.rootCallCount, 0);

  component.getEl("root").focus();
  assert.equal(component.fooCallCount, 1);
  assert.equal(component.rootCallCount, 1);
};
