var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var fooComponent = component.getComponent("foo");
  assert.equal(fooComponent.el.className, "foo");

  var link = component.getEl("link");
  assert.equal(link.nodeName, "A");
};
