// tags/child.marko
const $template$2 = "<a href=\"/\"> </a>";
const $walks$2 = "D l";
let n = 0;
function random() {
	return ++n / 10;
}
function $setup$2($scope) {
	_text($scope["#text/0"], random());
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "D l", $setup$2);

// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $wrapper_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
};
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $wrapper_content__setup);
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
