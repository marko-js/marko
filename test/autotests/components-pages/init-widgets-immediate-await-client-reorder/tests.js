var path = require('path');
var expect = require('chai').expect;


describe(path.basename(__dirname), function() {
    it('should initialize widgets before ready', function() {

        expect(window.afterInitWidgets_foo != null).to.equal(true);
        expect(window.afterInitWidgets_bar == null).to.equal(true);

        expect(window.afterReorderer_foo != null).to.equal(true);
        expect(window.afterReorderer_bar != null).to.equal(true);

        expect(window.fooWidget != null).to.equal(true);
        expect(window.barWidget != null).to.equal(true);

        expect(window.fooWidget.id).to.be.a('string');
        expect(window.barWidget.id).to.be.a('string');
    });
});