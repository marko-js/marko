var expect = require("chai").expect;

it("should should have mounted the component", function() {
  expect(window.counterComponent).to.not.equal(undefined);
});

it("should be interactive", function() {
  var countDisplay = window.counterComponent.getEl("count");
  var btn = window.counterComponent.getEl("button");
  expect(countDisplay.textContent).to.equal("Count: 0");
  btn.click();
  window.counterComponent.update();
  expect(countDisplay.textContent).to.equal("Count: 1");
});
