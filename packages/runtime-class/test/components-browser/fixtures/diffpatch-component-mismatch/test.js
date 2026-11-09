var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var children;

  children = component.getEl("root").children;
  assert.equal(children.length, 3);

  component.state.count++;
  component.update();

  children = component.getEl("root").children;
  assert.equal(children.length, 2);
};
