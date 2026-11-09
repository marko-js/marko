var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  var liEls = component.el.querySelectorAll("li");

  helpers.triggerMouseEvent(liEls[0], "mouseover");
  assert.equal(component.mouseOverColor, "red");

  helpers.triggerMouseEvent(liEls[1], "mouseover");
  assert.equal(component.mouseOverColor, "green");

  helpers.triggerMouseEvent(liEls[2], "mouseover");
  assert.equal(component.mouseOverColor, "blue");

  helpers.triggerMouseEvent(liEls[0], "mouseout");
  assert.equal(component.mouseOutColor, "red");

  helpers.triggerMouseEvent(liEls[1], "mouseout");
  assert.equal(component.mouseOutColor, "green");

  helpers.triggerMouseEvent(liEls[2], "mouseout");
  assert.equal(component.mouseOutColor, "blue");
};
