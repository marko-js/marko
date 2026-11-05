var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(component.getComponents("bar").length, 2);
  assert.equal(component.getComponents("bar")[0].name, "a");
  assert.equal(component.getComponents("bar")[1].name, "b");
};
