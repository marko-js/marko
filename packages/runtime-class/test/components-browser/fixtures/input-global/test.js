var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    $global: {
      pathname: "/",
    },
  });

  assert.equal(component.getEl("current").innerHTML, "Pathname: /");

  component.input = {
    $global: {
      pathname: "/test",
    },
  };
  component.update();

  assert.equal(component.getEl("current").innerHTML, "Pathname: /test");
};

module.exports.skip_hydrate =
  "When hydrating, only one $global value can be passed.  This test uses 2.";
