// template.marko
const $Row_content__fn__OR__label = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d() + $scope.e));
const $Row_content__fn = /*@__PURE__*/ _const(3, $Row_content__fn__OR__label);
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Row_content__fn($scope.a, $fn($scope)));
const $count = /*@__PURE__*/ _let(6, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $fn = ($scope) => () => $scope._.g;
_resumed.a0 = $fn;
