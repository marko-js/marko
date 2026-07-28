// template.marko
const $show = /*@__PURE__*/ _show(4, 1, 3);
const $visible = /*@__PURE__*/ _let(5, ($scope) => $show($scope, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$visible($scope, !$scope.f);
}));
