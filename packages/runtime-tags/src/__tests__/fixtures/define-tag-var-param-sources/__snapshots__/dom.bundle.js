// template.marko
const $Sum_content__a__OR__b = /*@__PURE__*/ _or(4, ($scope) => _return($scope, $scope.c + $scope.d));
const $Sum_content__a = /*@__PURE__*/ _const(2, $Sum_content__a__OR__b);
const $n = /*@__PURE__*/ _let(10, ($scope) => $Sum_content__a($scope.a, $scope.k));
const $setup__script = _script("a3", ($scope) => _on($scope.g, "click", function() {
	$n($scope, +$scope.k + 1);
}));
const $x = _var_resume("a1", ($scope, x) => _text($scope.e, x));
const $y = _var_resume("a2", ($scope, y) => _text($scope.f, y));
