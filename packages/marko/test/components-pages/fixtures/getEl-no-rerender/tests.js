var expect = require("chai").expect;

it("should allow getEl() with a split component", function() {
  var hello = window.hello;
  expect(hello.getEl("button") != null).to.equal(true);
  expect(hello.getEl("button").nodeName).to.equal("BUTTON");
});
