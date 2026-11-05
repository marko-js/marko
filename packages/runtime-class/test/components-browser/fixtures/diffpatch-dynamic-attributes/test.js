var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(component.el.hasAttribute("href"), true);
  assert.equal(component.el.hasAttribute("aria-disabled"), false);
  component.toggleTest();
  component.update();
  assert.equal(component.el.hasAttribute("href"), false);
  assert.equal(component.el.hasAttribute("aria-disabled"), true);
};
