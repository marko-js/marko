var assert = require("assert/strict");
var extend = require("raptor-util/extend");

exports.templateData = {
  outer: Promise.resolve(),
  inner1: Promise.resolve(),
  inner2: Promise.resolve(),
  $global: {
    runtimeId: "testRuntimeId",
    componentIdPrefix: "testComponentIdPrefix",
  },
};

exports.checkEvents = function (events, snapshot, out) {
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
