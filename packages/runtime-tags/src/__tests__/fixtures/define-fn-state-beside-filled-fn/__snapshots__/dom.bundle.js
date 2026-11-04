// template.marko
const $Row_content__a__OR__b = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, $scope.d() + $scope.e()));
const $Row_content__a = /*@__PURE__*/ _const(3, $Row_content__a__OR__b);
const $count = /*@__PURE__*/ _let(5, ($scope) => $Row_content__a($scope.a, $a($scope)));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $a = ($scope) => () => $scope.f;
const $b = ($scope) => () => $scope.e;
_resumed.a0 = $a;
_resumed.a1 = $b;
