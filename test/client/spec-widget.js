var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('widget' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should create widgets with the expected properties', function() {

        var widget = require('./fixtures/components/app-foo')
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
        var widget = require('./fixtures/components/app-foo')
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
        var widget1 = require('./fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        var widget2 = require('./fixtures/components/app-foo')
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
        var widget = require('./fixtures/components/app-jquery-proxy')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.test();
    });

    it('should preserve DOM elements correctly', function() {
        var preserveDomWidget = require('./fixtures/components/app-preserve-dom')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        preserveDomWidget.testPreserveDOM();
    });

    it('should reuse widgets', function() {
        var widget = require('./fixtures/components/app-stateful-reuse-widgets')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testReuseWidgets();
    });
});



