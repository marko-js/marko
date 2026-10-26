// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $input_other__OR__x__script = _script("__tests__/template.marko_0_input_other#5_x#8", ($scope) => console.log("run", $scope.x, $scope.input_other));
const $input_other__OR__x = /*@__PURE__*/ _or(9, $input_other__OR__x__script);
const $x = /*@__PURE__*/ _const("x", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$input_other__OR__x($scope);
});
const $input_label__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(7, ($scope) => $x($scope, $scope.n + $scope.input_label)));
const $n = /*@__PURE__*/ _let("n/6", $input_label__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__n);
const $input_other = /*@__PURE__*/ _const("input_other", $input_other__OR__x);
const $input = ($scope, input) => {
	$input_other($scope, input.other);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
