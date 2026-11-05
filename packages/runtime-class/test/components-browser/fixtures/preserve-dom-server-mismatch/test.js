var assert = require("assert/strict");

module.exports = function (helpers) {
  var counter = 0;

  var component = helpers.mount(require.resolve("./index"), {
    counter: counter,
  });

  assert.equal(component.getEl("list").textContent, "123");
};
