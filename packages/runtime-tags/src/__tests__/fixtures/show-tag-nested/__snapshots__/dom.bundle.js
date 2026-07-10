// template.marko
const $show2 = /*@__PURE__*/ _show(5, 2);
const $outer = /*@__PURE__*/ _let(6, ($scope) => $show2($scope, "g" in $scope ? $scope.g : true));
const $show = /*@__PURE__*/ _show(4, 3);
const $inner = /*@__PURE__*/ _let(7, ($scope) => $show($scope, "h" in $scope ? $scope.h : false));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$outer($scope, !("g" in $scope ? $scope.g : true));
	});
	_on($scope.b, "click", function() {
		$inner($scope, !("h" in $scope ? $scope.h : false));
	});
});
