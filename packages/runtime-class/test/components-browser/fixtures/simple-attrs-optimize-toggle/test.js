var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  expect(component.el.outerHTML).to.equal(`<div class="a" id="b" style="color:green"></div>`);
  component.toggle();
  component.update();
  expect(component.el.outerHTML).to.equal(`<div></div>`);
  component.toggle();
  component.update();
  expect(component.el.outerHTML).to.equal(`<div class="a" id="b" style="color: green;"></div>`);
  component.toggle();
  component.update();
  expect(component.el.outerHTML).to.equal(`<div></div>`);
};
