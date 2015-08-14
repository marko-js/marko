var chai = require('chai');
var expect = chai.expect;
require('marko/compiler').defaultOptions.checkUpToDate = false;
chai.Assertion.includeStack = true;

describe('marko-widgets/server' , function() {
    beforeEach(function() {
    });

    it('should support getRenderedWidgetIds()', function(done) {
        var markoWidgets = require('../../');

        var template = require('marko').load(require.resolve('../fixtures/components/app-getRenderedWidgetIds/template.marko'));

        template.render({}, function(err, html, out) {
    		var widgetIds = markoWidgets.getRenderedWidgetIds(out);
            expect(widgetIds).to.be.a('string');
            expect(widgetIds).to.equal('w0-w0,w0-w1,w0');
            done();
    	});
    });

    it('should report an error when w-id is used with w-bind', function() {
        // var component = require('../fixtures/invalid/invalid-w-id');
        // component.render({});

        expect(function() {
            var component = require('../fixtures/invalid/invalid-w-id');
            component.render({});
        }).to.throw(/The "w-id" attribute cannot be used in conjuntion with the "w-bind" attribute/);
    });

    it('should throw an error when Widget.prototype.render is provided', function() {
        expect(function() {
            var markoWidgetsRegistry = require(require.resolve('../../lib/registry'));
            var widgetModulePath = require.resolve('../fixtures/invalid/widget-with-render/widget.js');
            markoWidgetsRegistry.createWidget(widgetModulePath, 'w0');
        }).to.throw(/is no longer supported/);
    });

    it('should throw a friendly error for a missing "template" property', function() {
        expect(function() {
            require('../fixtures/invalid/app-missing-template');
        }).to.throw(/Expected "template"/);
    });
});



