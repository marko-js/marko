var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require.resolve('./index'), {});
    var customEventsWidget = helpers.mount(require.resolve('./components/app-custom-events'), {});

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