var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should mount implicit components with tag params", function() {
        expect(window.helloImplicitComponentSent).to.equal(true);
    });
});
