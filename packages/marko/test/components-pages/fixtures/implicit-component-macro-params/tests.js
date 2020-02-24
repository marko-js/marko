var expect = require("chai").expect;

it("should not mount implicit components with macros that have tag parameters", function() {
    expect(window.helloImplicitComponentSent).to.equal(undefined);
});
