const assert = require("assert/strict");
const extend = require("raptor-util/extend");
const { callbackProvider } = require("../../../__util__/async-helpers");

exports.templateData = {
  outer: callbackProvider(1, {}),
  inner1: callbackProvider(2, {}),
  inner2: callbackProvider(3, {}),
};

exports.checkEvents = function (events, snapshot, out) {
  // Expect that we invoked the await reorderer. If true, it was only able to
  // be invoked once.
  assert.equal(out.global.__awaitReordererInvoked, true);

  events = events.map(function (eventInfo) {
    var arg = extend({}, eventInfo.arg);
    assert.equal(arg.out != null, true);

    delete arg.out; // Not serializable
    delete arg.parent; // Not serializable
    delete arg.asyncValue; // Not serializable

    return {
      event: eventInfo.event,
      arg: arg,
    };
  });

  snapshot(events, out.isVDOM ? "-events-vdom.json" : "-events.json");
};

exports.skip_vdom = "client-reorder/placeholders are not supported in vdom";
