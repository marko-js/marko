var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var customEventsComponent = helpers.mount(require('./components/app-custom-events'), {});

    var receivedEvents = [];

    component.subscribeTo(customEventsComponent).on('testEvent', function () {
        receivedEvents.push(arguments);
    });

    customEventsComponent.emitTestEvent1();
    expect(receivedEvents.length).to.equal(1);
    customEventsComponent.destroy();
    customEventsComponent.emitTestEvent2();
    expect(receivedEvents.length).to.equal(1);
};