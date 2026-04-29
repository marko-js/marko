var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));
  expect(component.clicked).to.equal(false);

  helpers.triggerClick(component.el);

  expect(component.clicked).to.equal(true);
};
