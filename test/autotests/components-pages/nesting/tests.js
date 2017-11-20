var path = require('path');
var expect = require('chai').expect;
var Component = require('./components/a/index.marko');

describe(path.basename(__dirname), function() {
    it('should allow diffing html', function() {
        var parentNode = document.getElementById('test-result');
        var app = window.app;
        app.forceUpdate();
        app.update();
        expect(app.getEl().parentNode).to.equal(parentNode);
        expect(parentNode.querySelectorAll('.d').length).to.equal(2);
        // Ensure it produces the same output as rendering in the browser.
        expect(Component.renderSync().toString(), parentNode.innerHTML)
    });
});
