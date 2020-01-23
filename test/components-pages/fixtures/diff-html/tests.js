var expect = require("chai").expect;

it("should allow diffing html", function() {
    var app = window.app;
    expect(document.documentElement.getAttribute("count")).to.equal("0");

    app.increment();
    app.update();

    expect(document.documentElement.getAttribute("count")).to.equal("1");
});
