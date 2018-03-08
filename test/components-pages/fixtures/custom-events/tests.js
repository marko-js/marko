var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should invoke event handler method for custom events with extra args", function() {
        var component = window.fooComponent;

        component.pressEvent = null;

        component.getComponent("ok").emitPressEvent();

        expect(component.pressEvent[0].type).to.equal("ok");
        expect(component.pressEvent[1].component).to.equal(
            component.getComponent("ok")
        );

        component.getComponent("cancel").emitPressEvent();

        expect(component.pressEvent[0].type).to.equal("cancel");
        expect(component.pressEvent[1].component).to.equal(
            component.getComponent("cancel")
        );
    });
});
