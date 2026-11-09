var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var rootEl = component.getEl();
  var inputEl = rootEl.querySelector("input");

  component.hide();
  component.update();

  assert.equal(null === rootEl.querySelector("label"), true, "label should have been removed");
  assert.equal(inputEl === rootEl.querySelector("input"), true, "input should not have been removed");
};
