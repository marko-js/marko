var assert = require("assert/strict");

it("should initialize components correctly across async boundaries", function (done) {
  var rootButtonEl = window.component.getEl("element");
  assert.ok(rootButtonEl instanceof HTMLButtonElement);
  assert.equal(window.component.rootButtonClicks, 0);
  rootButtonEl.click();
  assert.equal(window.component.rootButtonClicks, 1);

  var appButtonComponent = window.component.getComponent("component");
  assert.ok(appButtonComponent.el instanceof HTMLButtonElement);
  assert.equal(window.component.appButtonClicks, 0);
  appButtonComponent.el.click();
  assert.equal(window.component.appButtonClicks, 1);

  done();
});
