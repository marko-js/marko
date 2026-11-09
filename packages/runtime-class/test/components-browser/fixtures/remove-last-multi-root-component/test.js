var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var el = component.getEl("root");

  assert.equal(el.children.length, 2);
  component.toggle();
  component.forceUpdate();
  component.update();
  assert.equal(el.children.length, 0);
  component.toggle();
  component.forceUpdate();
  component.update();
  assert.equal(el.children.length, 2);
};
