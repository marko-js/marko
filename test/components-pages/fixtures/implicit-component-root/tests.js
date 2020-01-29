var expect = require("chai").expect;

it("should mount explicit components", function() {
    expect(window.helloExplicitComponent != null).to.equal(true);
});

it("should mount implicit components nested in an explicit component", function() {
    expect(
        window.helloExplicitComponent.getComponent("nested") != null
    ).to.equal(true);
});
