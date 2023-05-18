var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  expect(component.getEl("a")).has.property("defaultValue", "abc");
  expect(component.getEl("a")).has.property("defaultChecked", true);

  expect(component.getEl("b")).has.property("defaultValue", "abc");
  expect(component.getEl("b")).has.property("defaultChecked", false);

  expect(component.getEl("c")).has.property("defaultValue", "abc");
  expect(component.getEl("d")).has.property("defaultValue", "abc");
};
