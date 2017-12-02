$_mod.def("/marko-test$1.0.0/components-pages/fixtures/async-boundaries/tests", function(require, exports, module, __filename, __dirname) { var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var expect = require('/chai$3.5.0/index'/*'chai'*/).expect;
var markoComponents = require('/marko$4.7.4/components-browser.marko'/*'marko/components'*/);

describe(path.basename(__dirname), function() {
    it('should initialize components correctly across async boundaries', function() {
        window.appInitAsync.test();
    });
});

});