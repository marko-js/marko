var path = require('path');
var expect = require('chai').expect;
var markoWidgets = require('marko-widgets');

describe(path.basename(__dirname), function() {
    it('should initialize widgets before ready', function() {

        expect(window.afterInitWidgetsFooWidget != null).to.equal(true);
        expect(window.afterInitWidgetsBarWidget != null).to.equal(true);

        expect(window.fooWidget != null).to.equal(true);
        expect(window.barWidget != null).to.equal(true);

        expect(window.fooWidget.id).to.be.a('string');
        expect(window.barWidget.id).to.be.a('string');
        expect(window.fooWidget.id).to.not.equal(window.barWidget.id);
    });

    it('should assign unique IDs to each widget', function() {
        expect(window.fooWidget.id).to.be.a('string');
        expect(window.barWidget.id).to.be.a('string');
        expect(window.bazWidget.id).to.be.a('string');
        expect(window.fooWidget.id).to.not.equal(window.barWidget.id);
        expect(window.fooWidget.id).to.not.equal(window.bazWidget.id);
        expect(window.bazWidget.id).to.contain(window.fooWidget.id);
    });

    it('should assign a unique ID to a nested widget based on the parent ID', function() {
        expect(window.bazWidget.id).to.contain(window.fooWidget.id + '-');
    });
});