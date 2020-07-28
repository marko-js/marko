var expect = require("chai").expect;

module.exports = function(helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  expect(component.el.hasAttribute("href")).to.equal(true);
  expect(component.el.hasAttribute("aria-disabled")).to.equal(false);
  component.toggleTest();
  component.update();
  expect(component.el.hasAttribute("href")).to.equal(false);
  expect(component.el.hasAttribute("aria-disabled")).to.equal(true);
};
