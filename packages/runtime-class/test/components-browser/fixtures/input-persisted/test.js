var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    color: "#09c",
  });

  assert.equal(component.getEl("current").getAttribute("style"), "color:#09c");

  component.increment();
  component.update();

  assert.equal(component.getEl("current").getAttribute("style"), "color:#09c");
};
