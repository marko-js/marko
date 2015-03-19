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

    it('should create widgets that supports rerender', function() {
        var previousSibling = document.createElement('div');
        document.getElementById('target').appendChild(previousSibling);

        var widget = require('./fixtures/components/app-rerender')
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
        var widget = require('./fixtures/components/app-rerender')
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

    it('should remove destroyed widgets from scoped widget collection', function() {
        var fooWidget = require('./fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(fooWidget.getWidget('bar')).to.not.be.empty;

        fooWidget.getWidget('bar').destroy();

        expect(fooWidget.getWidget('bar')).to.be.an('undefined');
    });
});



