// tags/foo.marko
const $template$1 = "<span></span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var foo_default = /*@__PURE__*/ _template("__tests__/tags/foo.marko", $template$1, "b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div></div>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b");
const div = "span";
const foo = "div";
const Bar = "div";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$dynamicTag($scope, Bar);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
