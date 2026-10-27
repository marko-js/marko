// template.marko
const $show2 = /*@__PURE__*/ _show(2);
const $outer = /*@__PURE__*/ _let(5, ($scope) => $show2($scope, $scope.f));
const $show = /*@__PURE__*/ _show(4, 3);
const $inner = /*@__PURE__*/ _let(6, ($scope) => $show($scope, $scope.g));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !$scope.f);
	});
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.g);
	});
});
