var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  helpers.triggerClick(component.getEl("foo"));
  assert.equal(component.numOfInvocations, 1);

  helpers.triggerClick(component.getEl("foo"));
  assert.equal(component.numOfInvocations, 1);
};
