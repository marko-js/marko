var assert = require("assert/strict");

module.exports = function (helpers) {
  var component = helpers.mount(require.resolve("./index.marko"));
  var hello = require("./components/app-hello").default;

  var renderTarget = component.getEl("renderTarget");
  assert.equal(renderTarget.innerHTML, "<span>ref</span>");

  hello.renderSync({ value: "before" }).prependTo(renderTarget);
  hello.renderSync({ value: "after" }).appendTo(renderTarget);
  assert.equal(renderTarget.innerHTML, "<div>Hello before</div><span>ref</span><div>Hello after</div>");
};
