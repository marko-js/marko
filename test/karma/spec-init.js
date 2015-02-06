require('marko-widgets');
var chai = require('chai');
var expect = chai.expect;

var util = require('./util');

describe('init' , function() {
    beforeEach(function() {
        util.cleanup();
    });

    it('should correctly initialize widgets rendered on the server', function() {

        var pageOutput = require('./generated/page-server-init.json');
        var html = pageOutput.html;
        var js = pageOutput.js;

        var targetEl = util.targetEl;
        targetEl.innerHTML = html;

        eval(js);

        expect(window.testData['app-foo']).to.be.a('object');
        expect(window.testData['app-foo'].config).to.be.a('object');
        expect(window.testData['app-foo'].config).to.deep.equal({
            string: 'world',
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        });



        // Make sure the app-dom-events widget was initialized:
        expect(window.testData['app-dom-events'].name).to.equal('app-dom-events');
        expect(window.testData['app-dom-events-jquery'].name).to.equal('app-dom-events-jquery');

        var appFooWidget = window.testData['app-foo'];
        var appBarWidget = appFooWidget.widgets.bar;

        var eventsFired = {};

        appBarWidget
            .on('destroy', function() {
                eventsFired.destroy = true;
            })
            .on('beforeDestroy', function() {
                eventsFired.beforeDestroy = true;
            });

        expect(appFooWidget.isDestroyed()).to.equal(false);
        expect(appBarWidget.isDestroyed()).to.equal(false);

        appFooWidget.destroy();

        expect(appFooWidget.isDestroyed()).to.equal(true);
        expect(appBarWidget.isDestroyed()).to.equal(true);
        expect(eventsFired.destroy).to.equal(true);
        expect(eventsFired.beforeDestroy).to.equal(true);
    });
});