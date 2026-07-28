// template.marko
const $show = /*@__PURE__*/ _show(4, 1, 3);
const $reveal = /*@__PURE__*/ _let(8, ($scope) => $show($scope, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$reveal($scope, !$scope.i);
}));
