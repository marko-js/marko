var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  var textarea = component.getEl("textarea");

  assert.equal(textarea.value, "Hello");

  component.state.value = "World";
  component.update();

  assert.equal(textarea.value, "World");

  component.state.value = undefined;
  component.update();

  assert.equal(textarea.value, "");

  component.state.value = null;
  component.update();

  assert.equal(textarea.value, "");

  component.state.value = 0;
  component.update();

  assert.equal(textarea.value, "0");
};
