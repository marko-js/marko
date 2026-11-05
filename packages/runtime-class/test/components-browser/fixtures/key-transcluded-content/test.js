var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var passwordInput = component.getEl("passwordInput");
  assert.equal(passwordInput.type, "password");
};
