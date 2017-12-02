$_mod.def("/marko-test$1.0.0/components-pages/fixtures/custom-events/tests", function(require, exports, module, __filename, __dirname) { var path = require('/path-browserify$0.0.0/index'/*'path'*/);
var expect = require('/chai$3.5.0/index'/*'chai'*/).expect;

describe(path.basename(__dirname), function() {

    it('should invoke event handler method for custom events with extra args', function() {
        var component = window.fooComponent;

        component.pressEvent = null;

        component.getComponent('ok').emitPressEvent();

        expect(component.pressEvent[0].type).to.equal('ok');
        expect(component.pressEvent[1].component).to.equal(component.getComponent('ok'));

        component.getComponent('cancel').emitPressEvent();

        expect(component.pressEvent[0].type).to.equal('cancel');
        expect(component.pressEvent[1].component).to.equal(component.getComponent('cancel'));
    });
});
});