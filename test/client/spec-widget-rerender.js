var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('widget re-render' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should create widgets that supports rerender', function() {
        var previousSibling = document.createElement('div');
        document.getElementById('target').appendChild(previousSibling);

        var widget = require('../fixtures/components/app-legacy-rerender')
            .render({
                label: 'Foo'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        var nextSibling = document.createElement('div');
        document.getElementById('target').appendChild(nextSibling);

        expect(widget.el.previousSibling).to.equal(previousSibling);
        expect(widget.el.nextSibling).to.equal(nextSibling);

        var parentNode = widget.el.parentNode;

        expect(widget.el.innerHTML.trim()).to.equal('Foo');

        var oldEl = widget.el;

        widget.rerender({
            label: 'Bar'
        });

        expect(widget.el.innerHTML.trim()).to.equal('Bar');

        expect(widget.el.parentNode).to.equal(parentNode);
        expect(widget.el !== oldEl).to.equal(true);


        expect(document.getElementById('target').childNodes.length).to.equal(3);
        expect(document.getElementById('target').childNodes[0]).to.equal(previousSibling);
        expect(document.getElementById('target').childNodes[1]).to.equal(widget.el);
        expect(document.getElementById('target').childNodes[2]).to.equal(nextSibling);
    });

    it('should use the same ID for re-rendered widgets', function() {
        var widget = require('../fixtures/components/app-legacy-rerender')
            .render({
                label: 'Foo'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        var oldId = widget.id;

        widget.rerender({
            label: 'Bar'
        });

        expect(widget.el.id).to.equal(oldId);
    });

    it('should support re-rendering a stateless widget with new props', function() {
        var targetEl = document.getElementById('target');

        var widget = require('../fixtures/components/app-simple')
            .render({
                name: 'Frank',
                messageCount: 10
            })
            .appendTo(targetEl)
            .getWidget();

        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 10 new messages.');

        require('marko-widgets').batchUpdate(function() {
            widget.setProps({
                name: 'John',
                messageCount: 20
            });
        });

        expect(targetEl.innerHTML).to.contain('Hello John! You have 20 new messages.');

        require('marko-widgets').batchUpdate(function() {
            widget.setProps({
                name: 'Jane',
                messageCount: 30
            });
            expect(targetEl.innerHTML).to.contain('Hello John! You have 20 new messages.');
        });

        expect(targetEl.innerHTML).to.contain('Hello Jane! You have 30 new messages.');
    });

    it('should reuse stateful widgets during a re-render', function() {
        var widget = require('../fixtures/components/app-stateful-reuse-widgets')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testReuseWidgets();
    });

    it('should reuse stateless widgets during a re-render', function() {
        var widget = require('../fixtures/components/app-stateless-reuse-widgets')
            .render({
                buttonSize: 'normal'
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        var oldButton1Widget = widget.getWidget('button1');
        var oldButton2Widget = widget.getEl('button2').__widget;
        var oldButton1El = oldButton1Widget.el;
        var oldButton2El = widget.getEl('button2');

        expect(widget.getWidget('button1').el.innerHTML.trim()).to.equal('normal');

        var self = widget;

        require('marko-widgets').batchUpdate(function() {
            self.setProps({
                buttonSize: 'small'
            });
        });

        var newButton1El = widget.getWidget('button1').el;
        var newButton2El = widget.getEl('button2');

        // // Both button widgets should be reused
        expect(widget.getWidget('button1') === oldButton1Widget).to.equal(true);
        expect(widget.getEl('button2').__widget === oldButton2Widget).to.equal(true);

        expect(widget.getWidget('button1').el.innerHTML.trim()).to.equal('small');


        // // State changed for button1 so it should have a new el
        // // since it re-renders to update its view
        // console.log('newButton1El: ', newButton1El);
        expect(newButton1El !== oldButton1El).to.equal(true);

        //
        // // State didn't change for button2 so it should be the same el
        expect(newButton2El !== oldButton2El).to.equal(true);
    });

    it('should reinitialize children first when doing a rerender', function() {
        window.rerenderInitOrder = [];

        var widget = require('../fixtures/components/app-rerender-init-order')
            .render({
                version: 0
            })
            .appendTo(document.getElementById('target'))
            .getWidget();


        expect(window.rerenderInitOrder).to.deep.equal(['childA', 'childB', 'parent']);

        window.rerenderInitOrder = [];

        require('marko-widgets').batchUpdate(function() {
            widget.setState('version', 1);
        });

        // console.log('ACTUAL ORDER: ', window.rerenderInitOrder);
        expect(window.rerenderInitOrder).to.deep.equal(['childA', 'childB', 'parent']);


    });
});



