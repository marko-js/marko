var assert = require("assert/strict");

it("should allow diffing title inside head", function () {
  var app = window.app;
  assert.equal(document.title, "Count: 0");

  app.increment();
  app.update();

  assert.equal(app.state.count, 1);
  assert.equal(document.title, "Count: 1");
});
