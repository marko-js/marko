var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var root = component.el;
  assert.equal(root.outerHTML, "<button></button>");

  component.setState("attrs", { "aria-pressed": true });
  component.update();
  assert.equal(root.outerHTML, '<button aria-pressed=""></button>');

  component.setState("attrs", { "aria-pressed": null });
  component.update();
  assert.equal(root.outerHTML, "<button></button>");

  component.setState("attrs", { "aria-pressed": true });
  component.update();
  assert.equal(root.outerHTML, '<button aria-pressed=""></button>');

  component.setState("attrs", { "aria-pressed": false });
  component.update();
  assert.equal(root.outerHTML, "<button></button>");

  component.setState("attrs", { "aria-pressed": undefined });
  component.update();
  assert.equal(root.outerHTML, "<button></button>");
};
