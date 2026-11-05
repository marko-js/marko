var assert = require("assert/strict");

module.exports = function (helpers) {
  function renderComponent(rootTagName) {
    var component = helpers.mount(require.resolve("./index"), {
      rootTagName: rootTagName,
    });
    return component;
  }

  var componentDiv = renderComponent("div");
  var componentSpan = renderComponent("span");

  assert.equal(componentDiv.el.nodeName, "DIV");
  assert.equal(componentSpan.el.nodeName, "SPAN");
};
