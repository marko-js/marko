var extend = require("raptor-util/extend");
var expect = require("chai").expect;

exports.templateData = {
    userInfoShort: function(done) {
        setTimeout(function() {
            done(null, {});
        }, 50);
    },
    userInfoLong: function(done) {
        setTimeout(function() {
            done(null, {});
        }, 200);
    }
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
