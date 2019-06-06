var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should update correctly", function() {
        var component = window.component;
        var input = component.getEl("input");

        input.focus();
        expect(document.activeElement).to.eql(input);

        component.state.text = "Updated";
        component.forceUpdate();
        component.update();

        expect(document.activeElement).to.eql(input);
    });
});
