var path = require("path");

describe(path.basename(__dirname), function() {
    it("preserve content included on the server", function() {
        window.app.test();
    });
});
