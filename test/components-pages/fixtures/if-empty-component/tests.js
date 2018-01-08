var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow diffing html', function() {
        var app = window.app;
        app.forceUpdate();
        app.update();
        expect(app.getEl().outerHTML).to.equal(undefined);
        app.input = { show: true };
        app.forceUpdate();
        app.update();
        expect(app.getEl().outerHTML).to.equal('<div class="show"></div>');
    });
});
