// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $input_label__OR__obj__OR__k = /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_label#4_obj#5_k#6/init", 7, ($scope) => _text($scope["#text/0"], $scope.obj[$scope.k]($scope.input_label)), 2);
const $obj = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("obj/5", $input_label__OR__obj__OR__k));
const $input_fmt = $obj;
const $k = /*@__PURE__*/ _const("k", $input_label__OR__obj__OR__k);
function $setup$1($scope) {
	$k($scope, "f");
}
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__obj__OR__k));
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_n__OR__fn = /*@__PURE__*/ _or(6, ($scope) => $input_fmt($scope["#childScope/0"], {
	f: $scope.fn,
	n: $scope.input_n
}));
const $fn2 = /*@__PURE__*/ _const("fn", $input_n__OR__fn);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
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
