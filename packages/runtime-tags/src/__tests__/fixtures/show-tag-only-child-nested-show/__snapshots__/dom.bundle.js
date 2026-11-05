// template.marko
const $show = /*@__PURE__*/ _show(3);
const $show2 = /*@__PURE__*/ _show(1);
const $visible = /*@__PURE__*/ _let(4, ($scope) => {
	$show($scope, $scope.e);
	$show2($scope, $scope.e);
});
const $n = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$visible($scope, !$scope.e);
	$n($scope, +$scope.f + 1);
}));
