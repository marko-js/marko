var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    colors: ["red", "green", "blue"],
  });

  var liEls = component.el.querySelectorAll("ul.primary li");

  helpers.triggerMouseEvent(liEls[0], "click");
  assert.deepEqual(component.color, { color: "red", type: "primary" });

  helpers.triggerMouseEvent(liEls[1], "click");
  assert.deepEqual(component.color, { color: "green", type: "primary" });

  helpers.triggerMouseEvent(liEls[2], "click");
  assert.deepEqual(component.color, { color: "blue", type: "primary" });

  liEls = component.el.querySelectorAll("ul.secondary li");

  helpers.triggerMouseEvent(liEls[0], "click");
  assert.deepEqual(component.color, { color: "red", type: "secondary" });

  helpers.triggerMouseEvent(liEls[1], "click");
  assert.deepEqual(component.color, {
    color: "green",
    type: "secondary",
  });

  helpers.triggerMouseEvent(liEls[2], "click");
  assert.deepEqual(component.color, { color: "blue", type: "secondary" });
};
