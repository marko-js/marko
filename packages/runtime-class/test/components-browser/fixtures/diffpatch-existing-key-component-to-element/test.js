var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  var renderTarget = component.getEl("renderTarget");
  assert.equal(renderTarget.innerHTML, "<div>Hello</div><div>Hello</div>");
  component.toggle();
  component.update();
  assert.equal(renderTarget.innerHTML, "<div></div><div></div><div></div>");
  component.toggle();
  component.update();
  assert.equal(renderTarget.innerHTML, "<div>Hello</div><div>Hello</div>");
  component.toggle();
  component.update();
  assert.equal(renderTarget.innerHTML, "<div></div><div></div><div></div>");
};
