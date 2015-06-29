var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('widget' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should create widgets with the expected properties', function() {

        var widget = require('../fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.id).to.be.a('string');
        expect(widget.emit).to.be.a('function');
        expect(widget.on).to.be.a('function');
        expect(widget.once).to.be.a('function');
        expect(widget.addListener).to.be.a('function');
        expect(widget.subscribeTo).to.be.a('function');
        expect(widget.getElId).to.be.a('function');
        expect(widget.elId).to.be.a('function');
        expect(widget.getEl).to.be.a('function');
        expect(widget.destroy).to.be.a('function');
        expect(widget.isDestroyed).to.be.a('function');
        expect(widget.rerender).to.be.a('function');
        expect(widget.detach).to.be.a('function');
        expect(widget.appendTo).to.be.a('function');
        expect(widget.replace).to.be.a('function');
        expect(widget.replaceChildrenOf).to.be.a('function');
        expect(widget.insertBefore).to.be.a('function');
        expect(widget.insertAfter).to.be.a('function');
        expect(widget.prependTo).to.be.a('function');
        expect(widget.ready).to.be.a('function');
        expect(widget.$).to.be.a('function');
    });

    it('should create widgets that extend EventEmitter', function() {
        var widget = require('../fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var fooEvent = null;
        var fooEventThis = null;

        function fooListener() {
            fooEvent = arguments;
            fooEventThis = this;
        }

        widget.on('foo', fooListener);

        widget.emit('foo', 'a', 'b');

        expect(fooEvent[0]).to.equal('a');

        expect(fooEvent[1]).to.equal('b');
        expect(fooEventThis).to.equal(widget);

        fooEvent = null;

        widget.removeListener('foo', fooListener);

        widget.emit('foo', 'a', 'b');

        expect(fooEvent).to.equal(null);
    });

    it('should create widgets that allow subscribeTo', function() {
        var widget1 = require('../fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var widget2 = require('../fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var fooEvent = null;
        var fooEventThis = null;



        widget1.subscribeTo(widget2)
            .on('foo', function fooListener() {
                fooEvent = arguments;
                fooEventThis = this;
            });


        widget2.emit('foo', 'a', 'b');

        expect(fooEvent[0]).to.equal('a');
        expect(fooEvent[1]).to.equal('b');
        expect(fooEventThis).to.equal(widget2);

        fooEvent = null;

        widget2.destroy();

        widget2.emit('foo', 'a', 'b');

        expect(fooEvent).to.equal(null);
    });

    it('should create widgets that supports this.$(...)', function() {
        var widget = require('../fixtures/components/app-jquery-proxy')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.test();
    });

    it('should preserve DOM elements correctly', function() {
        var preserveDomWidget = require('../fixtures/components/app-preserve-dom')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        preserveDomWidget.testPreserveDOM();
    });

    it('should preserve repeated DOM elements correctly', function() {
        var preserveDomWidget = require('../fixtures/components/app-preserve-repeated-dom')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        preserveDomWidget.testPreserveDOM();
    });

    it('should preserve body of repeated DOM elements correctly', function() {
        var preserveDomWidget = require('../fixtures/components/app-preserve-repeated-dom')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        preserveDomWidget.testPreserveDOM();
    });

    it('should conditionally preserve DOM elements correctly', function() {
        var preserveDomWidget = require('../fixtures/components/app-preserve-dom-if')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        preserveDomWidget.testPreserveDOM();
    });

    it('should reuse widgets', function() {
        var widget = require('../fixtures/components/app-stateful-reuse-widgets')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testReuseWidgets();
    });

    it('should support widgets with a custom renderer and a template', function() {
        var targetEl = document.getElementById('target');

        var widget = require('../fixtures/components/app-renderer-and-template')
            .render({
                name: 'Frank'
            })
            .appendTo(targetEl)
            .getWidget();

        expect(targetEl.innerHTML).to.contain('Frank');
        widget.setName('John');
        expect(targetEl.innerHTML).to.contain('John');
        expect(targetEl.innerHTML).to.not.contain('Frank');

        widget.rerender({
            name: 'Jane'
        });

        expect(targetEl.innerHTML).to.contain('Jane');
    });

    it('should support widgets with a renderer only', function() {
        var targetEl = document.getElementById('target');

        require('../fixtures/components/app-renderer-only')
            .render({
                name: 'Frank'
            })
            .appendTo(targetEl);

        expect(targetEl.innerHTML).to.equal('Hello Frank!');
    });

    it('should support lifecycle event handler methods for a stateless widget', function() {
        var targetEl = document.getElementById('target');

        var widget = require('../fixtures/components/app-stateless-lifecycle-events')
            .render({
                name: 'Frank',
                messageCount: 10
            })
            .appendTo(targetEl)
            .getWidget();

        expect(targetEl.innerHTML).to.contain('Hello Frank! You have 10 new messages.');
        expect(widget.lifecycleEvents).to.deep.equal([]);


        require('marko-widgets').batchUpdate(function() {
            widget.setProps({
                name: 'Jane',
                messageCount: 30
            });
            expect(targetEl.innerHTML).to.contain('Hello Frank! You have 10 new messages.');
            expect(widget.lifecycleEvents).to.deep.equal([]);
        });

        expect(targetEl.innerHTML).to.contain('Hello Jane! You have 30 new messages.');

        expect(widget.lifecycleEvents).to.deep.equal(['onBeforeUpdate', 'onAfterUpdate']);

        widget.destroy();

        expect(widget.lifecycleEvents).to.deep.equal(['onBeforeUpdate', 'onAfterUpdate', 'onBeforeDestroy', 'onDestroy']);
    });

    it('should support lifecycle event handler methods for a stateful widget', function() {
        var targetEl = document.getElementById('target');

        var widget = require('../fixtures/components/app-stateful-lifecycle-events')
            .render({
                name: 'Frank',
                messageCount: 10
            })
            .appendTo(targetEl)
            .getWidget();

        expect(targetEl.innerHTML).to.contain('Hello Frank!');
        expect(targetEl.innerHTML).to.contain('10');
        expect(widget.lifecycleEvents).to.deep.equal([]);

        require('marko-widgets').batchUpdate(function() {
            // NOTE: messageCount has an update handler
            widget.setState('messageCount', 30);
            expect(targetEl.innerHTML).to.contain('Hello Frank!');
            expect(targetEl.innerHTML).to.contain('10');
            expect(widget.lifecycleEvents).to.deep.equal([]);
        });

        expect(targetEl.innerHTML).to.contain('Hello Frank!');
        expect(targetEl.innerHTML).to.contain('30');
        expect(widget.lifecycleEvents).to.deep.equal(['onBeforeUpdate', 'onAfterUpdate']);

        require('marko-widgets').batchUpdate(function() {
            // NOTE: name does *not* have an update handler
            widget.setState('name', 'Jane');
            expect(targetEl.innerHTML).to.contain('Hello Frank!');
            expect(targetEl.innerHTML).to.contain('30');
            expect(widget.lifecycleEvents).to.deep.equal(['onBeforeUpdate', 'onAfterUpdate']);
        });

        expect(targetEl.innerHTML).to.contain('Hello Jane!');
        expect(targetEl.innerHTML).to.contain('30');
        expect(widget.lifecycleEvents).to.deep.equal(['onBeforeUpdate', 'onAfterUpdate', 'onBeforeUpdate', 'onAfterUpdate']);

        widget.destroy();

        expect(widget.lifecycleEvents).to.deep.equal(['onBeforeUpdate', 'onAfterUpdate', 'onBeforeUpdate', 'onAfterUpdate', 'onBeforeDestroy', 'onDestroy']);
    });

    it('should support getInitialProps', function() {
        var targetEl = document.getElementById('target');

        require('../fixtures/components/app-getInitialProps')
            .render({
                name: 'Frank'
            })
            .appendTo(targetEl)
            .getWidget();

        expect(targetEl.innerHTML).to.contain('Hello FRANK!');
    });

    it('should support conditional widgets', function() {
        require('../fixtures/components/app-conditional-widget')
            .render({
                includeWidget: false
            })
            .appendTo(document.getElementById('target'));

        expect(window.testData.widgets['app-conditional-widget'] == null).to.equal(true);

        require('../fixtures/components/app-conditional-widget')
            .render({
                includeWidget: true
            })
            .appendTo(document.getElementById('target'));

        expect(window.testData.widgets['app-conditional-widget'] == null).to.equal(false);
    });

    it('should support setStateDirty(name)', function() {

        var widget = require('../fixtures/components/app-setStateDirty')
            .render({
                colors: ['red', 'green', 'blue']
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.el.innerHTML).to.contain('red');
        expect(widget.el.innerHTML).to.contain('green');
        expect(widget.el.innerHTML).to.contain('blue');

        require('marko-widgets').batchUpdate(function() {
            // NOTE: name does *not* have an update handler
            widget.addColor('orange');
        });

        expect(widget.el.innerHTML).to.contain('red');
        expect(widget.el.innerHTML).to.contain('green');
        expect(widget.el.innerHTML).to.contain('blue');
        expect(widget.el.innerHTML).to.contain('orange');
    });

    it('should throw error when accessing this.widgets', function() {
        expect(function() {
            require('../fixtures/invalid/invalid-WidgetCollection')
                .render({})
                .appendTo(document.getElementById('target'));
        }).to.throw(/is no longer supported/);
    });

    it('should allow a w-id attr to be assigned to an invoke tag', function() {
        var widget = require('../fixtures/components/app-invoke-widget-id')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var barWidget = widget.getWidget('barTest');
        expect(barWidget != null).to.equal(true);
        expect(barWidget.name).to.equal('app-bar');
    });

    it('should allow a conditional widget with repeated IDs', function() {
        var widget = require('../fixtures/components/app-repeated-id-widgetless')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var childWidgets = widget.getWidgets('childWidget');
        expect(childWidgets.length).to.equal(1);
    });
});