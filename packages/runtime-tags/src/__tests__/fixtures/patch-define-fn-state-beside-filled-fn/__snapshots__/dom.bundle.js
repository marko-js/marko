// template.marko
const $Row_content__a__OR__b = /*@__PURE__*/ _or_patch("a3", 5, ($scope) => _text($scope.a, $scope.d() + $scope.e()));
const $Row_content__a = /*@__PURE__*/ _const(3, $Row_content__a__OR__b);
const $count = _let(5, ($scope) => $Row_content__a($scope.a, $a($scope)));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $a = ($scope) => () => $scope.f;
const $b = ($scope) => () => $scope.e;
_resumed.a0 = $a;
_bind_resume("a1 e", $b);
