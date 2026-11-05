var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"), {});
  var button = component.getEl("button");

  assert.equal(component.clickCount, undefined);
  button.click();

  setTimeout(() => {
    assert.equal(component.clickCount, 1);
    button.click();

    setTimeout(() => {
      assert.equal(component.clickCount, 2);
      done();
    }, 100);
  }, 100);
};
