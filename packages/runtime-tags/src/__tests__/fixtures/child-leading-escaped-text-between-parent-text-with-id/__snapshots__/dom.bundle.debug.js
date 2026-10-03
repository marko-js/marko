// tags/child/index.marko
const $template$1 = "&lt;<span></span>";
const $walks$1 = "b b";
const $x = ($scope, x) => _attr($scope["#span/0"], "id", x);
function $setup$1($scope) {
	$x($scope, _id($scope));
}
const $input_class = ($scope, input_class) => _attr_class($scope["#span/0"], input_class);
const $input = ($scope, input) => $input_class($scope, input.class);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, "b b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>before <!>${_w0} after</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Dc/${_w0}&l`)("b b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_class($scope["#childScope/0"], "inner");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
