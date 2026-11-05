var assert = require("assert/strict");

module.exports = function (helpers, done) {
  var component = helpers.mount(require.resolve("./index"), {});
  var counter = component.getComponent("counter");
  var button = counter.getEl("button");

  assert.equal(component.state.count, 0);
  assert.equal(counter.state.count, 0);
  button.click();

  setTimeout(() => {
    assert.equal(component.state.count, 1);
    assert.equal(counter.state.count, 1);
    done();
  }, 100);
};
