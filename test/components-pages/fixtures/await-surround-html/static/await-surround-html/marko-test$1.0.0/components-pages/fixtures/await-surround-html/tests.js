$_mod.def("/marko-test$1.0.0/components-pages/fixtures/await-surround-html/tests", function(require, exports, module, __filename, __dirname) { var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var expect = require('/chai$3.5.0/index'/*'chai'*/).expect;

describe(path.basename(__dirname), function() {
    it('should mount components', function() {
        expect(window.helloComponent != null).to.equal(true);
    });
});

});