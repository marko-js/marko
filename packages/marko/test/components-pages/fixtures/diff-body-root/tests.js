var expect = require("chai").expect;

it("should allow diffing body at the root", function() {
  var app = window.app;
  var countEl = app.getEl("count");
  expect(countEl.innerHTML).to.equal("0");

  app.increment();
  app.update();

  expect(countEl.innerHTML).to.equal("1");
});
