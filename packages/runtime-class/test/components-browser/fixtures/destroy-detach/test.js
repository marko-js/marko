var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var el = component.el;

  assert.equal(component.el.parentNode, helpers.targetEl);
  component.destroy();
  assert.equal(component.el == null, true);
  assert.equal(el.parentNode == null, true);
};
