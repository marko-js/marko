var chai = require('chai');
var expect = chai.expect;
var util = require('./util');

describe('client-rendered' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('[client-rendered] should allow this.$() to be used to attach DOM event listeners', function() {

        var widget = require('./fixtures/components/app-dom-events-jquery')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testDOMEvents();
    });

    it('[client-rendered] should allow w-on* to handle DOM events', function() {

        var widget = require('./fixtures/components/app-dom-events')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testDOMEvents();
    });

    it('[client-rendered] should allow for custom events', function() {

        var widget = require('./fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testCustomEvents();
    });

    it('[client-rendered] should allow getEl()', function() {

        var widget = require('./fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testDOMLookup();
    });

    it('[client-rendered] should assign unique IDs to widgets', function() {
        var widgets = [];

        function renderWidget() {
            var widget = require('./fixtures/components/app-foo')
                .render({})
                .appendTo(document.getElementById('target'))
                .getWidget();
            widgets.push(widget);
        }

        renderWidget();
        renderWidget();
        renderWidget();

        var ids = {};
        widgets.forEach(function(widget) {
            ids[widget.id] = true;
        });

        expect(widgets.length).to.equal(3);
        expect(Object.keys(ids).length).to.equal(widgets.length);
    });

    it('[client-rendered] should allow this.widgets', function() {
        var widget = require('./fixtures/components/app-foo')
            .render({})
            .appendTo(document.getElementById('target'))
            .getWidget();

        widget.testWidgetCollection();
    });

    it('[client-rendered] should allow for widget config to be passed in from renderer', function() {
        var widget = require('./fixtures/components/app-widget-config')
            .render({
                useAttribute: false
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.config).to.deep.equal({
            useAttribute: false,
            string: 'world',
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        });
    });

    it('[client-rendered] should allow for widget config to be provided using w-config', function() {
        var widget = require('./fixtures/components/app-widget-config')
            .render({
                useAttribute: true
            })
            .appendTo(document.getElementById('target'))
            .getWidget();

        expect(widget.config).to.deep.equal({
            useAttribute: true,
            string: 'world',
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        });
    });
});