var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {
    size: "large",
    label: "Initial Label",
  });

  assert.match(component.el.className, /large/);

  component.setSize("small");
  component.update();

  assert.match(component.el.className, /small/);
};
