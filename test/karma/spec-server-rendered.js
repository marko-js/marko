require('marko-widgets');
var chai = require('chai');
var expect = chai.expect;

var util = require('./util');

describe('server-rendered' , function() {
    beforeEach(function(done) {
        util.cleanup();

        var pageOutput = require('./generated/page-server-init.json');
        var html = pageOutput.html;
        var js = pageOutput.js;

        var targetEl = util.targetEl;
        targetEl.innerHTML = html;

        eval(js);

        done();
    });

    it('[server-rendered] should correctly initialize widgets rendered on the server', function() {
        expect(window.testData.widgets['app-foo'].length).to.equal(3);
        expect(window.testData.widgets['app-foo'][0]).to.be.a('object');
        expect(window.testData.widgets['app-foo'][0].config).to.be.a('object');
        expect(window.testData.widgets['app-foo'][0].config).to.deep.equal({
            string: 'world',
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        });

        // Make sure the app-dom-events widget was initialized:
        expect(window.testData.widgets['app-dom-events'][0].name).to.equal('app-dom-events');
        expect(window.testData.widgets['app-dom-events-jquery'][0].name).to.equal('app-dom-events-jquery');
        expect(window.testData.widgets['app-foo'][0].name).to.equal('app-foo');
        expect(window.testData.widgets['app-bar'][0].name).to.equal('app-bar');
    });

    it('[server-rendered] should allow w-on* event handlers for widgets rendered on the server', function() {
        window.testData.widgets['app-dom-events'].forEach(function(widget) {
            widget.testDOMEvents();
        });
    });

    it('[server-rendered] should allow jQuery to be used to attach event handlers', function() {
        window.testData.widgets['app-dom-events-jquery'].forEach(function(widget) {
            widget.testDOMEvents();
        });
    });

    it('[server-rendered] should allow for widgets to be destroyed', function() {
        window.testData.widgets['app-dom-events'].forEach(function(widget) {
            widget.testDestroy();
        });

        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testDestroy();
        });
    });

    it('[server-rendered] should allow custom events', function() {
        window.testData.widgets['app-foo'].forEach(function(widget) {
            widget.testCustomEvents();
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
});