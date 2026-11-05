var assert = require("assert/strict");

it("should update correctly", function () {
  var $el = document.getElementById("root");
  assert.equal($el.textContent, "Is Server: true");
});
