var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  assert.equal(helpers.targetEl.querySelector(".hello") != null, true);
  component.destroy();
  assert.equal(helpers.targetEl.querySelector(".hello") == null, true);
};

module.exports.skip_hydrate = "Implicit components do not get hydrated";
