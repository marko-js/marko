var assert = require("assert/strict");
var extend = require("raptor-util/extend");

exports.templateData = {
  getUserInfoShort: () =>
    new Promise((resolve) => setTimeout(() => resolve({}), 50)),
  getUserInfoLong: () =>
    new Promise((resolve) => setTimeout(() => resolve({}), 200)),
};

exports.checkEvents = function (events, snapshot) {
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

  snapshot(events, "-events.json");
};

exports.noFlushComment = true;
