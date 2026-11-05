// template.marko
const $show = /*@__PURE__*/ _show(1);
const $open = /*@__PURE__*/ _let(2, ($scope) => $show($scope, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
