// template.marko
const $show = /*@__PURE__*/ _show(1);
const $visible = /*@__PURE__*/ _let(3, ($scope) => $show($scope, $scope.d));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$visible($scope, !$scope.d);
}));
