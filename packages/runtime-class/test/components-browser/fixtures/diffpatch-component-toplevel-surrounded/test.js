var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.incrementBar();

  var children = component.getEl("root").children;
  assert.equal(children[children.length - 1].nodeName, "SPAN");
};
