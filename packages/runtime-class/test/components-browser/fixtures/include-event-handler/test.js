var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.helloReceived, false);

  component.el.querySelector("button").click();

  assert.equal(component.helloReceived, true);
};
