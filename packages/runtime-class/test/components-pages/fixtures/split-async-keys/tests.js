var assert = require("assert/strict");

it("should initialize components correctly across async boundaries", function (done) {
  for (let i = 0; i <= 4; i++) {
    assert.notEqual(window.component.getEl(`div${i}`), undefined);
    assert.notEqual(window.component.getComponent(`child${i}`), undefined);
  }
  done();
});
