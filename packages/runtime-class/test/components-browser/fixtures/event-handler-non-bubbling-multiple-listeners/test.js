var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  component.getEl("foo").focus();
  expect(component.fooCallCount).to.equal(1);
  expect(component.rootCallCount).to.equal(0);

  component.getEl("root").focus();
  expect(component.fooCallCount).to.equal(1);
  expect(component.rootCallCount).to.equal(1);
};
