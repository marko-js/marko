var assert = require("assert/strict");
var pubsub = require("../../../__util__/pubsub");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var received1 = [];
  var received2 = [];

  component.handleTestEvent1 = function () {
    received1.push({
      args: arguments,
      component: arguments[arguments.length - 1],
    });
  };

  component.handleTestEvent2 = function () {
    received2.push({
      args: arguments,
      component: arguments[arguments.length - 1],
    });
  };

  component.getComponent("customEvents").emitTestEvent1();
  assert.equal(received1.length, 1);
  assert.equal(received1[0].args.length, 3); // ['a', 'b', sourceComponent]
  assert.equal(received1[0].component, component.getComponent("customEvents"));

  pubsub.channel("customEvents-" + component.id).emit("emitTestEvent2");

  assert.equal(received1.length, 1);
  assert.equal(received2.length, 1);

  assert.equal(received2[0].args.length, 1); // [sourceComponent]
  assert.ok(typeof received2[0].component === "object" && received2[0].component !== null);
};
