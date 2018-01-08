var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should serialize component input down to the browser', function() {
        expect(window.barComponent.getComponent('foo')).to.equal(window.fooComponent);
        expect(window.fooComponent.input.color).to.equal('#800');
        expect(window.fooComponent.el.textContent).to.equal('The current count is 0');
        expect(window.fooComponent.el.getAttribute('style')).to.equal('color:#800;');
        window.fooComponent.increment();
        window.fooComponent.update();
        expect(window.fooComponent.el.textContent).to.equal('The current count is 1');
        expect(window.fooComponent.el.getAttribute('style')).to.equal('color:#800;');
        expect(window.barComponent.getComponent('foo')).to.equal(window.fooComponent);
    });
});