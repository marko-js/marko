var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var root = component.getEl("root");
  var tag = root.querySelector(".initial");

  assert.equal(tag.className, "initial");

  tag.className = "changed";
  component.forceUpdate();
  component.update();

  // Should not update the class again.
  assert.equal(tag.className, "changed");

  component.changeClass();
  component.update();
  assert.equal(tag.className, "changed");
};
