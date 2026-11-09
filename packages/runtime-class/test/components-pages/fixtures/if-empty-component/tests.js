var assert = require("assert/strict");

it("should allow diffing html", function () {
  var app = window.app;
  app.forceUpdate();
  app.update();
  assert.equal(app.getEl(), undefined);
  app.input = { show: true };
  app.forceUpdate();
  app.update();
  assert.equal(app.getEl().outerHTML, '<div class="show"></div>');
});
