var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});

  // We are initially on the "sign-in" page
  assert.equal(component.el.querySelector("a").innerHTML, "Sign up");

  helpers.triggerMouseEvent(component.el.querySelector("a"), "click");

  component.update();

  assert.equal(component.el.querySelector("a").innerHTML, "Sign in");

  helpers.triggerMouseEvent(component.el.querySelector("a"), "click");

  component.update();

  assert.equal(component.el.querySelector("a").innerHTML, "Sign up");

  helpers.triggerMouseEvent(component.el.querySelector("a"), "click");

  component.update();

  assert.equal(component.el.querySelector("a").innerHTML, "Sign in");
};
