var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var testEventFired = false;

  component.getComponent("bar").on("testEvent", function (a, b) {
    assert.equal(a, "a");
    assert.equal(b, "b");
    testEventFired = true;
  });

  component.getComponent("bar").emitTestEvent();

  assert.equal(testEventFired, true);
};
