// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__fns = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_label#4_fns#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.fns.f($scope.input_label))));
const $fns = _let("fns/5", $input_label__OR__fns);
const $input_fmt = ($scope, input_fmt) => $fns($scope, { f: input_fmt });
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__fns);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D l");
const $fn2 = ($scope, fn) => $input_fmt($scope["#childScope/0"], fn);
const $x = _let("x/7", ($scope) => _text($scope["#text/2"], $scope.x));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$fn2($scope, $fn);
	$x($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
function $fn(v) {
	return "f-" + v;
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
