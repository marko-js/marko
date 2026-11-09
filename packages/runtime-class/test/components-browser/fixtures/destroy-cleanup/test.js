const assert = require("assert/strict");

module.exports = function (helpers) {
  const component = helpers.mount(require.resolve("./index"), {});
  const root = component.getEl("root");
  const before = component.before;

  assert.equal(root.parentNode, helpers.targetEl);
  assert.equal(before.parentNode, helpers.targetEl);
  component.destroy();
  assert.equal(root.parentNode, null);
  assert.equal(before.parentNode, null);
};
