var assert = require("assert/strict");

it("should allow diffing html", function () {
  var app = window.app;
  assert.equal(document.body.querySelector("span.count").innerHTML, "0");

  app.increment();
  app.update();

  assert.equal(document.body.querySelector("span.count").innerHTML, "1");
});
