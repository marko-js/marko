var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    name: "Frank",
  });

  assert.deepEqual(component.onMountCalled, true);
};
