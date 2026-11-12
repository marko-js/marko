// template.marko
const $a__OR__b__OR__$global_x__keys = /*@__PURE__*/ _global_or(5, ($scope) => $a__OR__b__OR__$global_x__script($scope), /* @__PURE__ */ _global_closure("a4", /* @__PURE__ */ _global_key(7, "x")));
const $a__OR__b__OR__$global_x = /*@__PURE__*/ _or_patch("a2", 5, $a__OR__b__OR__$global_x__keys);
const $a__OR__b__OR__$global_x__script = _global_script("a0", ($scope) => document.body.dataset.sum = $scope.d + $scope.e + $scope.$.x, $a__OR__b__OR__$global_x__keys);
const $a = _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$a__OR__b__OR__$global_x($scope);
});
const $b = _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$a__OR__b__OR__$global_x($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$a($scope, +$scope.d + 1);
	$b($scope, +$scope.e + 1);
}));
