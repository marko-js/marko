var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {});
  var root = component.getEl("root");
  assert.equal(root.textContent, "number: 123: number");
  component.hide();
  component.update();
  assert.equal(root.textContent, "");
};
