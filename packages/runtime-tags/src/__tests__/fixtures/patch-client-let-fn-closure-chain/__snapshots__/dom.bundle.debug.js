// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__h = /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_label#4_h#7/init", 8, ($scope) => _text($scope["#text/0"], $scope.h($scope.input_label)));
const $h2 = /*@__PURE__*/ _const("h", $input_label__OR__h);
const $g2 = /*@__PURE__*/ _const("g", ($scope) => $h2($scope, $h($scope)));
const $f = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("f/5", ($scope) => $g2($scope, $g($scope))));
const $input_fmt = $f;
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__h));
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
const $h = ($scope) => (v) => $scope.g(v);
const $g = ($scope) => (v) => $scope.f(v);
_resumed["__tests__/tags/outer.marko_0/h"] = $h;
_resumed["__tests__/tags/outer.marko_0/g"] = $g;
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
