var expect = require("chai").expect;

it("should update correctly", function () {
  var component = window.component;
  var input = component.getEl("input");

  input.focus();
  expect(document.activeElement).to.eql(input);

  component.state.text = "Updated";
  component.forceUpdate();
  component.update();

  expect(document.activeElement).to.eql(input);
});
