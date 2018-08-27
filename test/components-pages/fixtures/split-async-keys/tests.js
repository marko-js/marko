var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should initialize components correctly across async boundaries", function(done) {
        expect(window.component.getEl("div")).to.not.equal(undefined);
        expect(window.component.getComponent("child")).to.not.equal(undefined);
        done();
    });
});
