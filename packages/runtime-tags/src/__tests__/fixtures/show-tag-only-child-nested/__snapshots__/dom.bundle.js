// template.marko
const $show2 = /*@__PURE__*/ _show(4, 2);
const $show3 = /*@__PURE__*/ _show(1);
const $show = /*@__PURE__*/ _let(5, ($scope) => {
	$show2($scope, $scope.f);
	$show3($scope, $scope.f);
});
const $n = /*@__PURE__*/ _let(6, ($scope) => _text($scope.d, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
	$n($scope, +$scope.g + 1);
}));
