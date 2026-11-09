var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    swapped: false,
  });

  var els = helpers.targetEl.querySelectorAll("div");
  assert.equal(els[0].className, "a");
  assert.equal(els[1].className, "b");

  component.input = { swapped: true };
  component.update();

  var elsAfter = helpers.targetEl.querySelectorAll("div");
  assert.equal(elsAfter[0].className, "b");
  assert.equal(elsAfter[1].className, "a");

  // Make sure the same element was swapped
  assert.equal(els[0], elsAfter[1]);
  assert.equal(els[1], elsAfter[0]);
};

module.exports.skip_hydrate = "Implicit components do not get hydrated";
