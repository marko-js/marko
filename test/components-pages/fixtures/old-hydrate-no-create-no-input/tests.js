var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should mount, not call the onCreate/onInput methods and update", function() {
        var component = window.testComponent;

        expect(component.input.start).to.equal(10);
        expect(component.state.count).to.equal(10);
        expect(component.el.querySelector(".count").innerHTML).to.equal("10");

        component.increment();
        component.update();

        expect(component.input.start).to.equal(10);
        expect(component.state.count).to.equal(11);
        expect(component.el.querySelector(".count").innerHTML).to.equal("11");
    });

    it("should still call all lifecycle methods on child components", function() {
        expect(window.childCreateCalled).to.equal(true);
        expect(window.childInputCalled).to.equal(true);
        expect(window.childRenderCalled).to.equal(true);
    });
});
