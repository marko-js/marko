var expect = require("chai").expect;

module.exports = function (helpers) {
  var counter = 0;

  var component = helpers.mount(require.resolve("./index"), {
    counter: counter
  });

  expect(component.getEl("list").textContent).to.equal("123");
};

module.exports.fails_hydrate = true;
