// template.marko
const $template = "<button><!><!></button>";
const $walks = " D%b%l";
const $global_x_key = /*@__PURE__*/ _global_key("$global_x/7", "x");
const $global_x = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_x#8/subscribe", $global_x_key);
const $a__OR__b__OR__$global_x__keys = /*@__PURE__*/ _global_or(5, ($scope) => $a__OR__b__OR__$global_x__script($scope), $global_x);
const $a__OR__b__OR__$global_x = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_a#3_b#4_$global_x#8/setup", 5, $a__OR__b__OR__$global_x__keys);
const $a__OR__b__OR__$global_x__script = _global_script("__tests__/template.marko_0_a#3_b#4_$global_x#8", ($scope) => document.body.dataset.sum = $scope.a + $scope.b + _global_read($scope.$global, "x"), $a__OR__b__OR__$global_x__keys);
const $a = _let("a/3", ($scope) => {
	_text($scope["#text/1"], $scope.a);
	$a__OR__b__OR__$global_x($scope);
});
const $b = _let("b/4", ($scope) => {
	_text($scope["#text/2"], $scope.b);
	$a__OR__b__OR__$global_x($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, +$scope.a + 1);
	$b($scope, +$scope.b + 1);
}));
function $setup($scope) {
	$a($scope, 1);
	$b($scope, 2);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
