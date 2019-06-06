var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should allow getEl() with a split component", function() {
        var splitComponent = window.splitComponent;
        expect(splitComponent.getEl("button") != null).to.equal(true);
        expect(splitComponent.getEl("button").nodeName).to.equal("BUTTON");

        expect(splitComponent.getEls("li").length).to.equal(3);
        expect(splitComponent.getEls("li").map(el => el.textContent)).to.eql([
            "1",
            "2",
            "3"
        ]);
    });
});
