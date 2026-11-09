var assert = require("assert/strict");

it("should update correctly", function () {
  var $el = document.getElementById("root");
  assert.deepEqual($el.innerHTML, "<ul><li>A</li><li>B</li><li>C</li></ul>");
});
