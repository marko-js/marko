var expect = require("chai").expect;

module.exports = function(helpers) {
  var component = helpers.mount(require.resolve("./index"), {});
  var root = component.el;
  expect(root.outerHTML).to.equal("<button></button>");

  component.setState("attrs", { "aria-pressed": true });
  component.update();
  expect(root.outerHTML).to.equal('<button aria-pressed=""></button>');

  component.setState("attrs", { "aria-pressed": null });
  component.update();
  expect(root.outerHTML).to.equal("<button></button>");

  component.setState("attrs", { "aria-pressed": true });
  component.update();
  expect(root.outerHTML).to.equal('<button aria-pressed=""></button>');

  component.setState("attrs", { "aria-pressed": false });
  component.update();
  expect(root.outerHTML).to.equal("<button></button>");

  component.setState("attrs", { "aria-pressed": undefined });
  component.update();
  expect(root.outerHTML).to.equal("<button></button>");
};
