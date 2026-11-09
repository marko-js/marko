var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"));
  assert.equal(component.clicked, false);

  helpers.triggerClick(component.el);

  assert.equal(component.clicked, true);
};
