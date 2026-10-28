// template.marko
const $template = "<button> </button><div></div>";
const $walks = " D l b";
const $input_label__OR__n = /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/1"], $scope.n + $scope.input_label)));
const $n = _let("n/8", $input_label__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label__OR__input_other__script = _script("__tests__/template.marko_0_input_label#5_input_other#6", ($scope) => _el_read($scope["#div/2"]).textContent = "script:" + $scope.input_label + $scope.input_other);
const $input_label__OR__input_other = /*@__PURE__*/ _fill("| __tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(7, $input_label__OR__input_other__script));
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", ($scope) => {
	$input_label__OR__n($scope);
	$input_label__OR__input_other($scope);
}, /*@__PURE__*/ _fill_mark("input_label", $input_label__OR__n));
const $input_other = /*@__PURE__*/ _const("input_other", $input_label__OR__input_other);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
