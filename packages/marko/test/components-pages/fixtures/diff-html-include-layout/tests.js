var expect = require("chai").expect;

it("should allow diffing html", function() {
  var app = window.app;
  expect(document.body.querySelector("span.count").innerHTML).to.equal("0");

  app.increment();
  app.update();

  expect(document.body.querySelector("span.count").innerHTML).to.equal("1");
});
