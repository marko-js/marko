var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
  });

  assert.equal(component.input.name, "FRANK");
  assert.equal(component.el.querySelector(".name").innerHTML, "FRANK");

  component.input = {
    name: "John",
  };

  component.update();

  assert.equal(component.input.name, "JOHN");
  assert.equal(component.el.querySelector(".name").innerHTML, "JOHN");
};
