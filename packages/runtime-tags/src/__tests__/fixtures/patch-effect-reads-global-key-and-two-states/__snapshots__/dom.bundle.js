// template.marko
const $a__OR__b__OR__$global_x = /*@__PURE__*/ _or_patch("a2", 5, _global_script("a0", ($scope) => document.body.dataset.sum = $scope.d + $scope.e + $scope.$.x, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("x"))));
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
