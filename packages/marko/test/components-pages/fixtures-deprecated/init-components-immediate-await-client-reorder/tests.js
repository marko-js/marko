var expect = require("chai").expect;

it("should initialize components before ready", function() {
  expect(window.afterInitComponents_foo != null).to.equal(true);
  expect(window.afterInitComponents_bar == null).to.equal(true);

  expect(window.fooComponent != null).to.equal(true);
  expect(window.barComponent != null).to.equal(true);

  expect(window.fooComponent.id).to.be.a("string");
  expect(window.barComponent.id).to.be.a("string");
});
