var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(component.getComponents("bar").length, 1);
  assert.equal(component.getComponents("bar")[0].name, "app-foo");
};
