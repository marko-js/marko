var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  var firstCheckbox = component.getEl("first");
  var secondCheckbox = component.getEl("second");

  assert.equal(firstCheckbox.checked, true);
  assert.equal(secondCheckbox.checked, false);

  helpers.triggerMouseEvent(firstCheckbox, "click");

  assert.equal(firstCheckbox.checked, false);
  assert.equal(secondCheckbox.checked, false);

  helpers.triggerMouseEvent(firstCheckbox, "click");

  assert.equal(firstCheckbox.checked, true);
  assert.equal(secondCheckbox.checked, false);

  helpers.triggerMouseEvent(secondCheckbox, "click");

  assert.equal(firstCheckbox.checked, true);
  assert.equal(secondCheckbox.checked, true);
};
