// tags/child/index.marko
const $template$1 = "X<span></span>";
const $walks$1 = "b b";
const $setup$1 = () => {};
const $input_class = ($scope, input_class) => _attr_class($scope["#span/0"], input_class);
const $input = ($scope, input) => $input_class($scope, input.class);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", $template$1, "b b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div>before <!>${_w0} after</div><div>a ><!>${_w1} b</div>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `Dc/${_w0}&lDc/${_w1}&l`)("b b", "b b");
function $setup($scope) {
	$input_class($scope["#childScope/0"], "inner");
	$input_class($scope["#childScope/1"], "inner");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
