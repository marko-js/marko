var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"), {
    name: "Frank",
  });

  assert.equal(component.el.querySelector(".render-count").innerHTML, "0");
  assert.equal(component.el.querySelector(".name").innerHTML, "Frank");

  // Rerender with a new props object that has the shallow properties
  component.input = {
    name: "Frank",
  };

  component.update();

  assert.equal(component.el.querySelector(".render-count").innerHTML, "0");
  assert.equal(component.el.querySelector(".name").innerHTML, "Frank");

  // Rerender with a new props object that has the shallow properties
  component.input = {
    name: "John",
  };

  component.update();

  assert.equal(component.el.querySelector(".render-count").innerHTML, "1");
  assert.equal(component.el.querySelector(".name").innerHTML, "John");
};
