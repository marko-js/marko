// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $child_content__show = /*@__PURE__*/ _show("#text/0");
const $child_content__setup = ($scope) => $child_content__show($scope, false);
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><button>go</button><!><!>", "c%", $child_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $child_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
