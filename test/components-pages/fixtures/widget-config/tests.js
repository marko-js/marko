var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should serialize component config down to the browser", function() {
        expect(window.fooComponent.componentConfig.name).to.equal("app-foo");
    });
});
