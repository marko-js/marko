$_mod.def("/marko-test$1.0.0/components-pages/fixtures/component-globals/tests", function(require, exports, module, __filename, __dirname) { var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var expect = require('/chai$3.5.0/index'/*'chai'*/).expect;

describe(path.basename(__dirname), function() {
    it('should allow attributes to not be updated', function() {
        var app = window.app;
        var helloComponent = app.getComponent('hello');


        expect(helloComponent.el.querySelector('.name').innerHTML).to.equal('Frank');
        expect(helloComponent.el.querySelector('.count').innerHTML).to.equal('1');

        helloComponent.state.count++;
        helloComponent.update();

        expect(helloComponent.el.querySelector('.name').innerHTML).to.equal('Frank');
        expect(helloComponent.el.querySelector('.count').innerHTML).to.equal('2');

        app.forceUpdate();
        app.update();

        helloComponent = app.getComponent('hello');
        expect(helloComponent.el.querySelector('.name').innerHTML).to.equal('Frank');
        expect(helloComponent.el.querySelector('.count').innerHTML).to.equal('2');
    });
});

});