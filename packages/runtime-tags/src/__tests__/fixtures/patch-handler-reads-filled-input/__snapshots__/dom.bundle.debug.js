// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $input_label__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.n + $scope.input_label)));
const $n = _let("n/5", $input_label__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
	document.title = $scope.input_label;
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__n);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
