// tags/child.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input = $dynamicTag;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D%l", "D%l");
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "Hello", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {});
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input($scope["#childScope/1"], { content: $child_content($scope) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
