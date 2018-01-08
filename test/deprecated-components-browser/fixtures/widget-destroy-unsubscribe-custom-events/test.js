var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});
    var customEventsWidget = helpers.mount(require('./components/app-custom-events'), {});

    var receivedEvents = [];

    widget.subscribeTo(customEventsWidget).on('testEvent', function () {
        receivedEvents.push(arguments);
    });

    customEventsWidget.emitTestEvent1();
    expect(receivedEvents.length).to.equal(1);
    customEventsWidget.destroy();
    customEventsWidget.emitTestEvent2();
    expect(receivedEvents.length).to.equal(1);
};