var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.clicked, false);
  helpers.triggerMouseEvent(component.getEl("button"), "click");
  assert.equal(component.clicked, true);
};
