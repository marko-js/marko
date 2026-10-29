// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__f__OR__g = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.f($scope.input_label) + $scope.g($scope.input_label)), 2);
const $f = /*@__PURE__*/ _let("f/5", $input_label__OR__f__OR__g);
const $g = /*@__PURE__*/ _let("g/6", $input_label__OR__f__OR__g);
const $input_fmt = ($scope, input_fmt) => {
	$f($scope, input_fmt);
	$g($scope, input_fmt);
};
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__f__OR__g);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $fn2 = ($scope, fn) => $input_fmt($scope["#childScope/0"], fn);
function $setup($scope) {
	$fn2($scope, $fn);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
function $fn(v) {
	return "f-" + v;
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
