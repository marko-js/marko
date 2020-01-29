var expect = require("chai").expect;

it("should allow diffing title inside head", function() {
    var app = window.app;
    expect(document.title).to.equal("Count: 0");

    app.increment();
    app.update();

    expect(app.state.count).to.equal(1);
    expect(document.title).to.equal("Count: 1");
});
