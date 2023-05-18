var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./template.marko"), {});

  expect(component.foo).to.equal(123);
};
