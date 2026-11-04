// template.marko
const $Row_content__fn__OR__label = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d() + $scope.e));
const $Row_content__fn = /*@__PURE__*/ _const(3, $Row_content__fn__OR__label);
const $input_x__OR__count = /*@__PURE__*/ _or(7, ($scope) => $Row_content__fn($scope.a, $fn($scope)));
const $count = /*@__PURE__*/ _let(6, $input_x__OR__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $fn = ($scope) => () => $scope.g + $scope.e;
_resumed.a0 = $fn;
