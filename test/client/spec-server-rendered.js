require('marko-widgets');
var chai = require('chai');
var expect = chai.expect;

var util = require('./util');

describe('server-rendered' , function() {
    beforeEach(function(done) {
        if (window.__karma !== false) {
            util.cleanup();
            var pageOutput = require('./karma/generated/page-server-init.json' + '');
            var html = pageOutput.html;
            var js = pageOutput.js;

            var targetEl = util.targetEl;
            targetEl.innerHTML = html;

            eval(js);
        }

        done();
    });

    after(function() {
        require('raptor-dom').removeChildren(document.getElementById('server'));
    });

    it('[server-rendered] should correctly initialize widgets', function() {
        expect(window.testData.widgets['app-foo'].length).to.equal(3);
        expect(window.testData.widgets['app-foo'][0]).to.be.a('object');

        // Make sure the app-dom-events widget was initialized:
        expect(window.testData.widgets['app-dom-events'][0].name).to.equal('app-dom-events');
        expect(window.testData.widgets['app-dom-events-jquery'][0].name).to.equal('app-dom-events-jquery');
        expect(window.testData.widgets['app-foo'][0].name).to.equal('app-foo');
        expect(window.testData.widgets['app-bar'][0].name).to.equal('app-bar');
    });

    it('[server-rendered] should allow w-on* event handlers for widgets rendered on the server', function() {
        // expect(true).to.equal(false);
        window.testData.widgets['app-dom-events'].forEach(function(widget) {
            widget.testDOMEvents();
        });
    });

    it('[server-rendered] should allow jQuery to be used to attach event handlers', function() {
        window.testData.widgets['app-dom-events-jquery'].forEach(function(widget) {
            widget.testDOMEvents();
        });
    });

    it('[server-rendered] should allow custom events', function() {
        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testCustomEvents();
        });
    });

    it('[server-rendered] should allow declarative custom events', function() {
        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testDeclarativeCustomEvents();
        });
    });

    it('[server-rendered] should allow getEl()', function() {
        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testDOMLookup();
        });
    });

    it('[server-rendered] should assign unique IDs to widgets', function() {
        expect(window.testData.widgets['app-foo'].length).to.equal(3);

        var ids = {};
        window.testData.widgets['app-foo'].forEach(function(widget) {
            ids[widget.id] = true;
        });

        expect(Object.keys(ids).length).to.equal(3);
    });

    it('[server-rendered] should allow this.getWidget(...)', function() {
        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testWidgetCollection();
        });
    });

    it('[server-rendered] should allow for widget config to be passed in from renderer', function() {
        var widget = window.testData.widgets['app-widget-config'][0];

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

    it('[server-rendered] should allow for widget config to be provided using w-config', function() {
        var widget = window.testData.widgets['app-widget-config'][1];

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

    it('[server-rendered] should allow for widgets to be extended', function() {
        var buttonWidget = window.testData.widgets.extendButton[0];
        var checkboxWidget = window.testData.widgets.extendCheckbox[0];

        expect(buttonWidget.getEl('label').innerHTML).to.equal('Button');
        expect(checkboxWidget.getEl('label').innerHTML).to.equal('Checkbox');

        expect(buttonWidget.setChecked).to.be.a('undefined');
        expect(checkboxWidget.setChecked).to.be.a('function');

        expect(buttonWidget.el.className).to.not.contain('app-extend-checkbox');
        expect(checkboxWidget.el.className).to.contain('app-extend-checkbox');

        expect(checkboxWidget.isChecked()).to.equal(false);
        util.triggerMouseEvent(checkboxWidget.getEl('label'), 'click');
        expect(checkboxWidget.isChecked()).to.equal(true);
    });

    it('[server-rendered] should initialize widgets correctly across async boundaries', function() {
        var widget = window.testData.widgets['app-init-async'][0];
        widget.testWidgetCollection();
    });

    it('[server-rendered] should allow for widgets to be destroyed', function() {
        window.testData.widgets['app-dom-events'].forEach(function(widget) {
            widget.testDestroy();
        });

        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testDestroy();
        });
    });
});