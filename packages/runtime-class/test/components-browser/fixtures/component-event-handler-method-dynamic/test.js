var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(component.fooClicked, false);
  assert.equal(component.barClicked, false);

  helpers.triggerClick(component.getEl("foo"));
  assert.equal(component.fooClicked, true);
  assert.equal(component.barClicked, false);

  helpers.triggerClick(component.getEl("bar"));
  assert.equal(component.fooClicked, true);
  assert.equal(component.barClicked, true);
};
