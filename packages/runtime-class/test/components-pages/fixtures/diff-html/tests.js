var assert = require("assert/strict");

it("should allow diffing html", function () {
  var app = window.app;
  assert.equal(document.documentElement.getAttribute("count"), "0");

  app.increment();
  app.update();

  assert.equal(document.documentElement.getAttribute("count"), "1");
});
