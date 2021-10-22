var expect = require("chai").expect;

module.exports = function(helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  expect(component.el.textContent).to.equal("test 1test 2test 3");
};
