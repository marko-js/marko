var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.match(helpers.targetEl.innerHTML, /Hello, Anna!/);
  var nameComponent = component.getComponent("name");
  nameComponent.changeName();
  nameComponent.update();
  assert.match(helpers.targetEl.innerHTML, /Hello, Vickie!/);
};
