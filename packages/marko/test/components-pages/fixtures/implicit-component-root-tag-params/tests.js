var expect = require("chai").expect;

it("should mount implicit components with tag params", function() {
  expect(window.helloImplicitComponentSent).to.equal(true);
});
