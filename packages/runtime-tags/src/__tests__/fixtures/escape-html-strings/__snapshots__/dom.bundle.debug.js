// tags/child.marko
const $template$1 = "<span>child`\"'</span><span>${value}</span>";
const $walks$1 = "c";
const $setup$1 = () => {};
const value = "No!!";
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "c", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div><!>\` ${_w0}</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D%c/${_w0}&l`)("c");
const count = 1;
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], count));
function $setup($scope) {
	$setup__render($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
