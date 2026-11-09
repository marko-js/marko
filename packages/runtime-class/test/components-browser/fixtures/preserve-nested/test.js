var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.el.querySelector(".render-count").innerHTML, "0");

  component.forceUpdate();
  component.update();

  assert.equal(component.el.querySelector(".render-count").innerHTML, "0");
};
