var extend = require('raptor-util/extend');
var expect = require('chai').expect;

exports.templateData = {
    testDataProvider: function(done) {
        setTimeout(function() {
            var err = new Error('Something went wrong!');
            done(err, null);
        }, 200);
    }
};

exports.checkEvents = function(events, helpers) {
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

    helpers.compare(events, '-events.json');
};