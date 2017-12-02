$_mod.def("/marko-test$1.0.0/components-pages/fixtures/diff-body/tests", function(require, exports, module, __filename, __dirname) { var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var expect = require('/chai$3.5.0/index'/*'chai'*/).expect;

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

});