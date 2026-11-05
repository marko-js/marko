var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  var liEls = component.el.querySelectorAll("li");

  helpers.triggerMouseEvent(liEls[0], "click");
  assert.equal(component.color, "red");

  helpers.triggerMouseEvent(liEls[1], "click");
  assert.equal(component.color, "green");

  helpers.triggerMouseEvent(liEls[2], "click");
  assert.equal(component.color, "blue");
};
