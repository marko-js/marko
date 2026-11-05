var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(component.el.style.left, "0px");
  assert.equal(component.el.style.marginRight, "10px");
};
