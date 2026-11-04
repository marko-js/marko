// template.marko
const $show = /*@__PURE__*/ _show(2);
const $open = _let(6, ($scope) => $show($scope, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
