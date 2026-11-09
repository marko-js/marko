var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.getComponent("bar").emitTestEvent1();

  assert.equal(component.testEvent1Fired, true);

  component.getComponent("bar").emitTestEvent2();

  assert.equal(component.testEvent2Fired, true);
};
