// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.a, $scope.i);
	_text($scope.b, $scope.i);
	_text($scope.d, $scope.i);
	_text($scope.g, $scope.i);
});
const $show = /*@__PURE__*/ _show(5, 2, 4);
const $vis = /*@__PURE__*/ _let(9, ($scope) => $show($scope, $scope.j));
const $setup__script = _script("a0", ($scope) => _on($scope.h, "click", function() {
	$count($scope, $scope.i + 5);
	$vis($scope, !$scope.j);
}));
