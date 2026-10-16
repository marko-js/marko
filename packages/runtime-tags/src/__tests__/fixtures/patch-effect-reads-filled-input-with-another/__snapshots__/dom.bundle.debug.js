// template.marko
const $template = "<button> </button><div></div>";
const $walks = " D l b";
const $input_label__OR__n = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/1"], $scope.n + $scope.input_label));
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/8", $input_label__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_label__OR__input_other__script = _script("__tests__/template.marko_0_input_label#5_input_other#6", ($scope) => _el_read($scope["#div/2"]).textContent = "script:" + $scope.input_label + $scope.input_other);
const $input_label__OR__input_other = /*@__PURE__*/ _shell_or("__tests__/template.marko_0_input_label#5_input_other#6/init", 7, $input_label__OR__input_other__script);
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__n($scope);
	$input_label__OR__input_other($scope);
}));
const $input_other = /*@__PURE__*/ _const("input_other", $input_label__OR__input_other);
const $input = ($scope, input) => {
	$input_other($scope, input.other);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
