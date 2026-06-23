// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", "", "", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<div>${_w0}</div>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `D/${_w0}&l`)("");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
