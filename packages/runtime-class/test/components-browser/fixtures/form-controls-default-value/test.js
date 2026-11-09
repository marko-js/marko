var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  assert.equal(component.getEl("a").defaultValue, "abc");
  assert.equal(component.getEl("a").defaultChecked, true);

  assert.equal(component.getEl("b").defaultValue, "abc");
  assert.equal(component.getEl("b").defaultChecked, false);

  assert.equal(component.getEl("c").defaultValue, "abc");
  assert.equal(component.getEl("d").defaultValue, "abc");
};
