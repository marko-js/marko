// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__g = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.g($scope.input_label)));
const $g2 = /*@__PURE__*/ _const("g", $input_label__OR__g);
const $obj = /*@__PURE__*/ _let("obj/5", ($scope) => $g2($scope, $g($scope)));
const $input_fmt = $obj;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__g);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
const $g = ($scope) => (v) => $scope.obj.f(v);
_resumed["__tests__/tags/outer.marko_0/g"] = $g;
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_n__OR__fn = /*@__PURE__*/ _or(6, ($scope) => $input_fmt($scope["#childScope/0"], {
	f: $scope.fn,
	n: $scope.input_n
}));
const $fn2 = /*@__PURE__*/ _const("fn", $input_n__OR__fn);
function $setup($scope) {
	$fn2($scope, $fn);
}
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__OR__fn);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_n($scope, input.n);
	$input_label($scope, input.label);
};
function $fn(v) {
	return "f-" + v;
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
