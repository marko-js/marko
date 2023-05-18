var expect = require("chai").expect;

it("should allow getEl() with a dynamic component", function () {
  expect(window.dynamic.getEl("test") !== undefined).to.equal(true);
  expect(window.splitDynamic.getEl("test") !== undefined).to.equal(true);
});
