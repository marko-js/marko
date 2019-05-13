var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should not mount implicit components with macros that have tag parameters", function() {
        expect(window.helloImplicitComponentSent).to.equal(undefined);
    });
});
