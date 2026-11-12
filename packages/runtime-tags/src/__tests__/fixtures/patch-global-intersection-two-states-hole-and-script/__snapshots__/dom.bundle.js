// template.marko
const $a__OR__b__OR__$global_x__global_or = /*@__PURE__*/ _global_or(($scope) => _text($scope.d, $scope.e + $scope.f + $scope.$.x), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("x")));
const $a__OR__b__OR__$global_x = /*@__PURE__*/ _or_patch("a2", 6, $a__OR__b__OR__$global_x__global_or);
_global_script("a0", ($scope) => document.body.dataset.sum = $scope.e + $scope.f + $scope.$.x, $a__OR__b__OR__$global_x__global_or);
const $a = _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$a__OR__b__OR__$global_x($scope);
});
const $b = _let(5, ($scope) => {
	_text($scope.c, $scope.f);
	$a__OR__b__OR__$global_x($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a($scope, +$scope.e + 1);
	$b($scope, +$scope.f + 1);
}));
