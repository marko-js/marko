// template.marko
const $Row_content__a__OR__b = /*@__PURE__*/ _or_resume("a2", 7, ($scope) => _text($scope.a, $scope.e + $scope.f));
const $Row_content__a = /*@__PURE__*/ _const(4, $Row_content__a__OR__b);
const $n = /*@__PURE__*/ _let(8, ($scope) => $Row_content__a($scope.a, $scope.i));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));
