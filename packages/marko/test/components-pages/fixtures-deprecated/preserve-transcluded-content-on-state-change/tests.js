var expect = require("chai").expect;

it("should update correctly", function () {
  var component = window.component;
  var $button = component.getEl("button");
  expect($button.textContent).to.eql("button label");

  $button.click();
  component.update();

  expect($button.textContent).to.eql("button labeltest");
});
