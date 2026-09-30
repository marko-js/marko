// template.marko
const $show2 = /*@__PURE__*/ _show(6, 2, 5);
const $outer = /*@__PURE__*/ _let(7, ($scope) => $show2($scope, $scope.h));
const $show = /*@__PURE__*/ _show(4, 3);
const $inner = /*@__PURE__*/ _let(8, ($scope) => $show($scope, $scope.i));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !$scope.h);
	});
	_on($scope.b, "click", function() {
		$inner($scope, !$scope.i);
	});
});
