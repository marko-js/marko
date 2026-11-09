var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  assert.equal(component.el.querySelector("pre").innerHTML, "");

  component.submit();
  component.update();

  assert.equal(component.el.querySelector("pre").innerHTML, "Placeholder error");
};
