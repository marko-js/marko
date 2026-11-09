var assert = require("assert/strict");
var pubsub = require("../../../__util__/pubsub");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  window.received1 = [];
  window.received2 = [];

  component.getComponent("customEvents").emitTestEvent1();
  assert.equal(window.received1.length, 1);
  assert.equal(window.received1[0].args.length, 3); // ['a', 'b', sourceComponent]
  assert.equal(window.received1[0].component, component.getComponent("customEvents"));

  pubsub.channel("customEvents-" + component.id).emit("emitTestEvent2");

  assert.equal(window.received1.length, 1);
  assert.equal(window.received2.length, 1);

  assert.equal(window.received2[0].args.length, 1); // [sourceComponent]
  assert.ok(typeof window.received2[0].component === "object" && window.received2[0].component !== null);
};
