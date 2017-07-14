var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow diffing body', function() {
        var app = window.app;
        var countEl = app.getEl('count');
        expect(countEl.innerHTML).to.equal('0');

        app.increment();
        app.update();

        expect(countEl.innerHTML).to.equal('1');
    });
});
