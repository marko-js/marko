var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it.skip("should update correctly", function() {
        var component = window.component;
        var originalChild = component.getComponent("child");

        // Ensure we can find the child reference and that it has the exposed method.
        expect(originalChild).to.be.have.property("method");

        // Trigger a force re-render and ensure reference still exists.
        component.forceUpdate();
        component.update();
        expect(component.getComponent("child")).to.eql(originalChild);
    }).details =
        "issue #947";
});
