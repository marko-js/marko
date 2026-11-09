var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  assert.equal(component.numberOfInvocations, 0);

  component.input = {
    colors: ["red", "blue"],
  };
  component.update();

  assert.equal(component.numberOfInvocations, 1);

  component.input = {
    colors: ["red"],
  };
  component.update();

  assert.equal(component.numberOfInvocations, 2);
};
