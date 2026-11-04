// template.marko
const $show2 = /*@__PURE__*/ _show(1);
const $show = /*@__PURE__*/ _let(2, ($scope) => $show2($scope, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
