var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    $global: {
      name: "Frank",
      serializedGlobals: { name: true },
    },
  });

  assert.equal(component.el.querySelector(".name").innerHTML, "Frank");
  assert.equal(component.el.querySelector(".count").innerHTML, "1");

  component.state.count++;
  component.update();

  assert.equal(component.el.querySelector(".name").innerHTML, "Frank");
  assert.equal(component.el.querySelector(".count").innerHTML, "2");
};
