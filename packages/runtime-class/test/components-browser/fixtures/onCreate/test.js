var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    name: "Frank",
    $global: {
      name: "Frank",
      serializedGlobals: { name: true },
    },
  });

  var onCreateArgs = component.onCreateArgs;
  var onCreateInput = onCreateArgs[0];
  var onCreateOut = onCreateArgs[1];

  assert.equal(onCreateInput.name, "Frank");
  assert.equal(onCreateOut.global.name, "Frank");
};
