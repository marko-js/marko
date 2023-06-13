var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    size: 2,
    name: "foo"
  });

  expect(component.getEl("heading").tagName).to.equal("H2");
  expect(component.getEl("heading").innerHTML).to.equal("Hello");
  expect(component.getEl("tag").tagName).to.equal("TAG-FOO-2");
  expect(component.getEl("tag").innerHTML).to.equal("Test");

  component.input = {
    size: 3,
    name: "bar"
  };
  component.update();

  expect(component.getEl("heading").tagName).to.equal("H3");
  expect(component.getEl("heading").innerHTML).to.equal("Hello");
  expect(component.getEl("tag").tagName).to.equal("TAG-BAR-3");
  expect(component.getEl("tag").innerHTML).to.equal("Test");
};
