var expect = require("chai").expect;

it("should allow fixed IDs for components", function () {
  var component = window.appFixedId;
  expect(document.getElementById("appFixedId") != null).to.equal(true);
  component.testGetComponent();
  component.testGetEl();
});
