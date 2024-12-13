var expect = require("chai").expect;

it("should have initialized both components", function () {
  var component = window.testComponent;
  expect(component.clicks).to.equal(0);
  document.getElementById("a").click();
  expect(component.clicks).to.equal(1);
  document.getElementById("b").click();
});
