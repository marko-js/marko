var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  helpers.triggerMouseMove(component.getEl("inputWithoutHandler"));
  assert.equal(component.mouseMoved, false);

  helpers.triggerMouseMove(component.getEl("inputWithHandler"));
  assert.equal(component.mouseMoved, true);

  // Reset component.mouseMoved
  component.mouseMoved = false;

  helpers.triggerMouseMove(component.getEl("inputWithLiteralHandler"));
  assert.equal(component.mouseMoved, true);
};
