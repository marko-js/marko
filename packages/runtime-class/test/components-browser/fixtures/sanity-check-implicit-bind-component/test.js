var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    age: 30,
  });

  assert.equal(component.el.innerHTML, "Frank");

  component.setName("Jane");

  component.update();

  assert.equal(component.el.innerHTML, "Jane");
};
