var expect = require("chai").expect;

it("should initialize all components", function () {
  expect(window.fooComponents.length).to.equal(2);
});
