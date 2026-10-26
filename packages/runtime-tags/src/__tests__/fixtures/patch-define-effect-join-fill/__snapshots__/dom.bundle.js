// template.marko
const $Row_content__a__OR__b = /*@__PURE__*/ _fill_join("a3", 5, /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.e + $scope.f))));
const $Row_content__a__script = _script("a1", ($scope) => $scope.b.textContent = "s:" + $scope.e);
const $Row_content__b = /*@__PURE__*/ _const(5, $Row_content__a__OR__b);
const $n = /*@__PURE__*/ _let(5, ($scope) => $Row_content__b($scope.a, $scope.f));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
