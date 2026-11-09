var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    label: "Foo",
  });

  var rootEl = component.getEl("root");

  component.input = {
    label: "Bar",
  };
  component.update();

  assert.equal(component.getEl("root"), rootEl);
};
