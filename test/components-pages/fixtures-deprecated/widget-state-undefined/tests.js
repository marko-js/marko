var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should serialize widget config down to the browser", function() {
        expect(window.fooWidgets[0].state.data).to.equal(undefined);
        expect(window.fooWidgets[1].state.data).to.equal(1);
    });
});
