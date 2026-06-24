// tags/child/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "%b%c";
const $setup$1 = () => {};
const $content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $name = ($scope, name) => _text($scope["#text/0"], name);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $content = $dynamicTag;
const $input = ($scope, input) => {
	$name($scope, input.name);
	$content($scope, input.content);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "This is the body content", "b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$content_direct($scope["#childScope/0"], $child_content($scope));
	$name($scope["#childScope/0"], "World");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
