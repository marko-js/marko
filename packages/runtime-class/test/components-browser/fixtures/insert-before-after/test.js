var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  var hello = require("./components/app-hello").default;

  var renderTarget = component.getEl("renderTarget");
  var referenceElement = component.getEl("referenceElement");
  assert.equal(renderTarget.innerHTML, "<span>ref</span>");

  hello.renderSync({ value: "before" }).insertBefore(referenceElement);
  hello.renderSync({ value: "after" }).insertAfter(referenceElement);
  assert.equal(renderTarget.innerHTML, "<div>Hello before</div><span>ref</span><div>Hello after</div>");
};
