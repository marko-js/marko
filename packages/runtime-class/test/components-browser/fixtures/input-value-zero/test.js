var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    value: 1,
  });

  assert.equal(component.getEl("input").value, "1");

  component.state.value = 0;
  component.update();

  assert.equal(component.getEl("input").value, "0");
};
