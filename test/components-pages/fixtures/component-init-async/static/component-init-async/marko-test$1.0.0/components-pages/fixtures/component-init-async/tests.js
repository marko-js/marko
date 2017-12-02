$_mod.def("/marko-test$1.0.0/components-pages/fixtures/component-init-async/tests", function(require, exports, module, __filename, __dirname) { var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var expect = require('/chai$3.5.0/index'/*'chai'*/).expect;


describe(path.basename(__dirname), function() {
    it('should allow attributes to not be updated', function() {
        function testHelloComponent(name) {
            var helloComponent = window[name];
            expect(helloComponent !== undefined).to.equal(true);
            expect(helloComponent.el.innerHTML).to.contain('Hello from ' + name + '!');
        }

        testHelloComponent('hello1');
        testHelloComponent('hello2');
        testHelloComponent('hello3');
    });
});

});