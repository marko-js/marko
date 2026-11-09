var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var label = component.getEl("root").querySelector("label");
  var forElId = label.getAttribute("for");
  var inputEl = document.getElementById(forElId);

  assert.equal(!!forElId, true);
  assert.equal(inputEl.value, "test");
  assert.equal(label.getAttribute("for:scoped"), null);
};
