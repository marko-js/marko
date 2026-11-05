var assert = require("assert/strict");

it("should allow getEl() with a split component", function () {
  var splitComponent = window.splitComponent;
  assert.equal(splitComponent.getEl("button") != null, true);
  assert.equal(splitComponent.getEl("button").nodeName, "BUTTON");

  assert.equal(splitComponent.getEls("li").length, 3);
  assert.deepEqual(splitComponent.getEls("li").map((el) => el.textContent), [
    "1",
    "2",
    "3",
  ]);
});
