var path = require("path");

describe(path.basename(__dirname), function() {
    it("should allow diffing html", function() {
        var app = window.app;
        app.forceUpdate();
        app.update();
    });
});
