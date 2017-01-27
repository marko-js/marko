var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should serialize widget input down to the browser', function() {
        expect(window.barWidget.getWidget('foo')).to.equal(window.fooWidget);
        expect(window.fooWidget.input.color).to.equal('#800');
        expect(window.fooWidget.el.textContent).to.equal('The current count is 0');
        expect(window.fooWidget.el.getAttribute('style')).to.equal('color:#800;');
        window.fooWidget.increment();
        window.fooWidget.update();
        expect(window.fooWidget.el.textContent).to.equal('The current count is 1');
        expect(window.fooWidget.el.getAttribute('style')).to.equal('color:#800;');
        expect(window.barWidget.getWidget('foo')).to.equal(window.fooWidget);
    });
});