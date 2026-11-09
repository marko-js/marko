var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  helpers.triggerClick(component.getEl("inputWithoutHandler"));
  assert.equal(component.clicked, false);

  helpers.triggerClick(component.getEl("inputWithHandler"));
  assert.equal(component.clicked, true);

  // Reset component.clicked
  component.clicked = false;

  helpers.triggerClick(component.getEl("inputWithLiteralHandler"));
  assert.equal(component.clicked, true);
};
