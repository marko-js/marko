var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./template.marko"));
  var el = component.el;
  assert.equal(el.tagName, "DIV");
  assert.equal(el.getAttribute("data-id"), "nested-child");
};
