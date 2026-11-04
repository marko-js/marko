// template.marko
const $Row_content__a__OR__b = /*@__PURE__*/ _or_patch("a2", 6, ($scope) => _text($scope.a, $scope.e + $scope.f));
const $Row_content__a__script = _script_patch("a1 e", ($scope) => $scope.b.textContent = "s:" + $scope.e);
const $Row_content__b = /*@__PURE__*/ _const(5, $Row_content__a__OR__b);
const $n = _let(5, ($scope) => $Row_content__b($scope.a, $scope.f));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
