var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('widget lifecycle' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should return undefined for references to destroyed widgets (legacy widget)', function() {
        var fooWidget = require('../fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(fooWidget.getWidget('bar') == null).to.equal(false);

        fooWidget.getWidget('bar').destroy();

        expect(fooWidget.getWidget('bar') == null).to.equal(true);
    });

    it('should return undefined for references to destroyed widgets', function() {
        var widget = require('../fixtures/components/app-destroy')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var button1Widget = widget.getButton1();
        expect(button1Widget != null).to.equal(true);

        widget.destroyButton1();

        button1Widget = widget.getButton1();
        expect(button1Widget === undefined).to.equal(true);
    });

    it('should unsubscribe to custom events for destroyed widgets', function() {
        var widget = require('../fixtures/components/app-destroy')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var customEventsWidget = require('../fixtures/components/app-custom-events')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var receivedEvents = [];

        widget.subscribeTo(customEventsWidget)
            .on('testEvent', function() {
                receivedEvents.push(arguments);
            });

        customEventsWidget.emitTestEvent1();
        expect(receivedEvents.length).to.equal(1);
        customEventsWidget.destroy();
        customEventsWidget.emitTestEvent2();
        expect(receivedEvents.length).to.equal(1);
    });
});



