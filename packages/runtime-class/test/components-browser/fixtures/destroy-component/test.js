var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    showSimple: true,
  });

  var simple = component.getComponent("simple");
  var simpleDestroyed = false;

  simple.onDestroy = function () {
    simpleDestroyed = true;
  };

  assert.equal(simple != null, true);

  component.input = {
    showSimple: false,
  };

  component.update();

  assert.equal(simpleDestroyed, true);
  assert.equal(simple.isDestroyed(), true);

  assert.equal(component.getComponent("simple") == null, true);
};
