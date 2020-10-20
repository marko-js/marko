var expect = require("chai").expect;

module.exports = function(helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    color: "red"
  });

  var OFFSET = helpers.isHydrate ? -1 : 0;

  component.once("update", () => component.numberOfInvocations++);

  expect(component.numberOfInvocations).to.equal(OFFSET + 1);

  component.input = {
    color: "blue"
  };

  component.update();

  expect(component.numberOfInvocations).to.equal(OFFSET + 1);
};

exports.fails = "issue xxxx";
