// template.marko
const $Row_content__a__OR__b = /*@__PURE__*/ _shell_or("a1", 7, ($scope) => _text($scope.a, $scope.e + $scope.f));
const $Row_content__a = /*@__PURE__*/ _const(4, $Row_content__a__OR__b);
const $n = /*@__PURE__*/ _fill_let("a5", 6, ($scope) => $Row_content__a($scope.a, $scope.g));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
