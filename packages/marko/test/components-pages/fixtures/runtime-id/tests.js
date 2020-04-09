var expect = require("chai").expect;

it("should serialize component input down to the browser", function() {
  expect(window.$test_C).to.not.equal(undefined);
  expect(window.fooComponent).equal(undefined);
  window.$initComponents("test");

  expect(window.fooComponent.input.color).to.equal("#800");
  expect(window.fooComponent.el.textContent).to.equal("The current count is 0");
  expect(window.fooComponent.el.getAttribute("style")).to.equal("color:#800;");
  window.fooComponent.increment();
  window.fooComponent.update();
  expect(window.fooComponent.el.textContent).to.equal("The current count is 1");
  expect(window.fooComponent.el.getAttribute("style")).to.equal("color:#800;");
});
