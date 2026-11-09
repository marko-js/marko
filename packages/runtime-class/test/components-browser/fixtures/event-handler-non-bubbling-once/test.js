var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  helpers.triggerMouseMove(component.getEl("foo"));
  assert.equal(component.numOfInvocations, 1);

  helpers.triggerMouseMove(component.getEl("foo"));
  assert.equal(component.numOfInvocations, 1);
};
