var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  assert.equal(component.callCount, 2);

  var fooEl = component.getEl("foo");
  var fooNextSibling = fooEl.nextElementSibling;
  var barEl = component.getEl("bar");
  var barNextSibling = barEl.nextElementSibling;

  assert.equal(fooNextSibling.nextElementSibling, barEl);

  component.swap();
  component.update();

  assert.equal(component.callCount, 4);

  assert.equal(component.getEl("bar").nextElementSibling.nextElementSibling, component.getEl("foo"));
  assert.equal(component.getEl("foo"), fooEl);
  assert.equal(component.getEl("foo").nextElementSibling, fooNextSibling);
  assert.equal(component.getEl("bar"), barEl);
  assert.equal(component.getEl("bar").nextElementSibling, barNextSibling);
};
