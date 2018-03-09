var path = require("path");
var expect = require("chai").expect;

describe(path.basename(__dirname), function() {
    it("should serialize widget config down to the browser", function() {
        expect(window.fooWidget.widgetConfig.name).to.equal("app-foo");
    });
});
