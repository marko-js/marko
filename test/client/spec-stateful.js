var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('stateful widgets' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should update widgets', function() {
        var widget = require('../fixtures/components/app-stateful-button')
            .render({
                size: 'large',
                label: 'Initial Label'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.el.className).to.contain('large');

        require('marko-widgets').batchUpdate(function() {
            widget.setSize('small');
        });

        expect(widget.el.className).to.contain('small');
    });

    it('should preserve body content', function() {
        var widget = require('../fixtures/components/app-stateful-preserve-body')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testPreserveBody();
    });

    it('should not re-render if changed state property has an update handler', function() {
        var widget = require('../fixtures/components/app-stateful-update-handlers')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var oldEl = widget.el;

        var button1Widget = widget.getWidget('button1');
        var button2Widget = widget.getWidget('button2');

        expect(button1Widget.el.className).to.contain('small');
        expect(button2Widget.el.className).to.contain('small');

        expect(button1Widget.el.innerHTML).to.contain('Initial Label');
        expect(button2Widget.el.innerHTML).to.contain('Initial Label');

        require('marko-widgets').batchUpdate(function() {
            widget.setState('buttonSize', 'large');
        });

        expect(button1Widget).to.equal(widget.getWidget('button1'));
        expect(button2Widget).to.equal(widget.getWidget('button2'));

        expect(button1Widget.el.className).to.contain('large');
        expect(button2Widget.el.className).to.contain('small');

        expect(button1Widget.el.innerHTML).to.contain('Initial Label');
        expect(button2Widget.el.innerHTML).to.contain('Initial Label');

        expect(widget.el).to.equal(oldEl);
    });

    it('should re-render if any changed state property does *not* have an update handler', function() {
        var widget = require('../fixtures/components/app-stateful-update-handlers')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var oldEl = widget.el;

        var button1Widget = widget.getWidget('button1');
        var button2Widget = widget.getWidget('button2');

        expect(button1Widget.el.className).to.contain('small');
        expect(button2Widget.el.className).to.contain('small');

        expect(button1Widget.el.innerHTML).to.contain('Initial Label');
        expect(button2Widget.el.innerHTML).to.contain('Initial Label');

        require('marko-widgets').batchUpdate(function() {
            widget.setState('buttonSize', 'large');
            widget.setState('buttonLabel', 'New Label'); // buttonLabel does not have an update handler
        });

        expect(button1Widget.el.className).to.contain('large');
        expect(button2Widget.el.className).to.contain('large');

        expect(button1Widget.el.innerHTML).to.contain('New Label');
        expect(button2Widget.el.innerHTML).to.contain('New Label');

        expect(widget.el).to.equal(oldEl);
    });

    it('should copy state object on write', function() {
        var widget = require('../fixtures/components/app-stateful-button')
            .render({
                size: 'large',
                label: 'Initial Label'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        require('marko-widgets').batchUpdate(function() {
            var oldState = widget.state;
            widget.setState('foo', 'bar');


            expect(widget.state).to.not.equal(oldState);

            oldState = widget.state;
            widget.setState('hello', 'world');
            expect(widget.state).to.equal(oldState);
        });
    });

    it('should not copy state if changed property value matches old value', function() {
        var widget = require('../fixtures/components/app-stateful-button')
            .render({
                size: 'large',
                label: 'Initial Label'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        require('marko-widgets').batchUpdate(function() {
            var oldState = widget.state;
            widget.setState('size', 'large');
            expect(widget.state).to.equal(oldState);
        });
    });
});



