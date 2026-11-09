var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var numTestEventFired = 0;

  component.handleTestEvent1 = function (a, b) {
    assert.equal(a, "a");
    assert.equal(b, "b");
    numTestEventFired++;
  };

  component.getComponent("bar").emitTestEvent();
  component.getComponent("bar").emitTestEvent();

  assert.equal(numTestEventFired, 1);
};
