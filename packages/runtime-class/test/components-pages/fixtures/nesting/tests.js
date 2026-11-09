var assert = require("assert/strict");
var Component = require("./components/a/index.marko").default;

it("should allow diffing html", function () {
  var parentNode = document.getElementById("test-result");
  var app = window.app;
  app.forceUpdate();
  app.update();
  assert.equal(app.getEl().parentNode, parentNode);
  assert.equal(parentNode.querySelectorAll(".d").length, 2);
  // Ensure it produces the same output as rendering in the browser.
  assert.equal(Component.renderSync().toString(), parentNode.innerHTML);
});
