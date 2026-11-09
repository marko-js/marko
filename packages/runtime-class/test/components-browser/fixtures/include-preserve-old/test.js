var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    name: "Frank",
    index: 0,
  });

  var fooComponent = component.getComponent("foo");

  assert.equal(fooComponent.el.querySelector(".body").innerHTML, "Current index: 0");
  assert.equal(fooComponent.el.querySelector("span").innerHTML, "Hello Frank!");

  fooComponent.state.name = "Jane";

  fooComponent.update();

  assert.equal(fooComponent.el.querySelector(".body").innerHTML, "Current index: 0");
  assert.equal(fooComponent.el.querySelector("span").innerHTML, "Hello Jane!");
};
