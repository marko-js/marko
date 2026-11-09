var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.getEl("nameInput").parentNode.nodeName, "DIV");

  component.state.renderCount++;
  component.update();

  assert.equal(component.getEl("nameInput").parentNode.nodeName, "P");
  assert.equal(component.getEl("nameInput").value, "2");
};
