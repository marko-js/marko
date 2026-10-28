// template.marko
const $Row_content__fn__OR__label = /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d() + $scope.e)));
const $Row_content__fn = /*@__PURE__*/ _const(3, $Row_content__fn__OR__label);
const $count = /*@__PURE__*/ _let(5, ($scope) => $Row_content__fn($scope.a, $fn($scope)));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $fn = ($scope) => () => $scope.f;
_resumed.a0 = $fn;
