var expect = require("chai").expect;

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));

  var renderTarget = component.getEl("renderTarget");
  expect(renderTarget.innerHTML).to.equal("<div>Hello</div><div>Hello</div>");
  component.toggle();
  component.update();
  expect(renderTarget.innerHTML).to.equal("<div></div><div></div><div></div>");
  component.toggle();
  component.update();
  expect(renderTarget.innerHTML).to.equal("<div>Hello</div><div>Hello</div>");
  component.toggle();
  component.update();
  expect(renderTarget.innerHTML).to.equal("<div></div><div></div><div></div>");
};
