var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    age: 30,
  });

  var nameEl = component.getEl("name");
  var ageEl = component.getEl("age");
  var linkEl = component.getEl("link");

  assert.equal(nameEl.parentNode != null, true);
  assert.equal(ageEl.parentNode != null, true);
  assert.equal(linkEl.parentNode != null, true);

  component.destroy();

  assert.equal(nameEl.parentNode == null, true);
  assert.equal(ageEl.parentNode == null, true);
  assert.equal(linkEl.parentNode == null, true);
};
