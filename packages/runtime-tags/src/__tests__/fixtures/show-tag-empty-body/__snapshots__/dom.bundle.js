// template.marko
const $show = /*@__PURE__*/ _show(3, 1);
const $reveal = /*@__PURE__*/ _let(7, ($scope) => $show($scope, "h" in $scope ? $scope.h : false));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$reveal($scope, !("h" in $scope ? $scope.h : false));
}));
