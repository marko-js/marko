var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  var fooEl = component.getEl("foo");
  var barEl = component.getEl("bar");

  assert.equal(fooEl.nextSibling, barEl);

  component.state.swapped = true;
  component.update();

  assert.equal(component.getEl("foo"), fooEl);
  assert.equal(component.getEl("bar"), barEl);

  assert.equal(barEl.nextSibling, fooEl);
};
