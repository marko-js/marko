// template.marko
const $template = "<button><!><!></button>";
const $walks = " D%b%l";
const $global_x_key = /*@__PURE__*/ _global_key("x");
const $global_x = /*@__PURE__*/ _global_closure($global_x_key);
const $a__OR__b__OR__$global_x = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_a#3_b#4_$global_x#8/setup", 5, _global_script("__tests__/template.marko_0_a#3_b#4_$global_x#8", ($scope) => document.body.dataset.sum = $scope.a + $scope.b + _global_read($scope.$global, "x"), $global_x));
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
