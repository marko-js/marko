// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
const $x__$global_suffix = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_x#8_$global_suffix#7", ($scope) => _text($scope["#text/0"], $scope.x + _global_read($scope.$global, "suffix")), "suffix");
const $x = /*@__PURE__*/ _const("x", $x__$global_suffix);
const $input_a__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_a#5_count#6/setup", 7, ($scope) => $x($scope, $scope.input_a + $scope.count));
const $count = _let("count/6", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$input_a__OR__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__count);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
