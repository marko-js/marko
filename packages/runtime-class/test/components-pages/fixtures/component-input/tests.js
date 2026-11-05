var assert = require("assert/strict");

it("should serialize component input down to the browser", function () {
  assert.equal(window.fooComponent.input.color, "#800");
  assert.equal(window.fooComponent.el.textContent, "The current count is 0");
  assert.equal(window.fooComponent.el.getAttribute("style"), "color:#800");
  window.fooComponent.increment();
  window.fooComponent.update();
  assert.equal(window.fooComponent.el.textContent, "The current count is 1");
  assert.equal(window.fooComponent.el.getAttribute("style"), "color:#800");
});
