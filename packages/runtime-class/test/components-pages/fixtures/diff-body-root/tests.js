var assert = require("assert/strict");

it("should allow diffing body at the root", function () {
  var app = window.app;
  var countEl = app.getEl("count");
  assert.equal(countEl.innerHTML, "0");

  app.increment();
  app.update();

  assert.equal(countEl.innerHTML, "1");
});
