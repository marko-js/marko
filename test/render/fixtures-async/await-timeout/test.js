var extend = require("raptor-util/extend");
var expect = require("chai").expect;

exports.templateData = {
    getUserInfoShort: () =>
        new Promise(resolve => setTimeout(() => resolve({}), 50)),
    getUserInfoLong: () =>
        new Promise(resolve => setTimeout(() => resolve({}), 200))
};

exports.checkEvents = function(events, snapshot) {
    events = events.map(function(eventInfo) {
        var arg = extend({}, eventInfo.arg);
        expect(arg.out != null).to.equal(true);

        delete arg.out; // Not serializable
        delete arg.asyncValue; // Not serializable

        return {
            event: eventInfo.event,
            arg: arg
        };
    });

    snapshot(events, "-events.json");
};
