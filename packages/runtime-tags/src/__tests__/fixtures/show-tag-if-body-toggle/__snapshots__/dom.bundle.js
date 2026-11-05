// template.marko
const $show = /*@__PURE__*/ _show(3, 1);
const $visible = /*@__PURE__*/ _let(4, ($scope) => $show($scope, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$visible($scope, !$scope.e);
}));
