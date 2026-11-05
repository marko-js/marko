var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  assert.equal(component.getEl("searchInput").value, "");

  component.increment();
  component.update();

  assert.equal(component.getEl("searchInput").value, "");
};
