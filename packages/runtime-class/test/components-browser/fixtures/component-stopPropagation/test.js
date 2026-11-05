var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  helpers.triggerClick(component.getEl("button"));
  assert.equal(component.divClicked, false);
  assert.equal(component.buttonClicked, true);
};
