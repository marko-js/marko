var assert = require("assert/strict");
var getComponentForEl = require("marko/components").getComponentForEl;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {});
  var root = component.getEl("root");
  var childA = root.querySelector(".child-a");
  var childB = root.querySelector(".child-b");
  var childC = root.querySelector(".child-c");

  assert.equal(getComponentForEl(childA).name, "child-a");
  assert.equal(getComponentForEl(childB).name, "parent");
  assert.equal(getComponentForEl(childC).name, "child-c");
};
