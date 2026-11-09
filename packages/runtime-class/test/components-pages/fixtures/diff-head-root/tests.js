var assert = require("assert/strict");

it("should allow diffing head at the root", function () {
  var app = window.app;
  assert.equal(document.head.getAttribute("count"), "0");

  app.increment();
  app.update();

  assert.equal(document.head.getAttribute("count"), "1");
});
