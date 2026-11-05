var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  assert.equal(component.el.outerHTML, `<div class="a" id="b" style="color:green"></div>`);
  component.toggle();
  component.update();
  assert.equal(component.el.outerHTML, `<div></div>`);
  component.toggle();
  component.update();
  assert.equal(component.el.outerHTML, `<div class="a" id="b" style="color: green;"></div>`);
  component.toggle();
  component.update();
  assert.equal(component.el.outerHTML, `<div></div>`);
};
