var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var rootNode = component.getEl("root");

  assert.equal(component.event, undefined);
  helpers.triggerCustomEvent(rootNode, "Custom-Event", 123);
  assert.equal(component.event.detail, 123);
};
