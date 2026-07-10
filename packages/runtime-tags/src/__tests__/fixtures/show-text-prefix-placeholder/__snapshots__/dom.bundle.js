// template.marko
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.a, $scope.h);
	_text($scope.b, $scope.h);
	_text($scope.d, $scope.h);
	_text($scope.f, $scope.h);
});
const $show = /*@__PURE__*/ _show(4, 2);
const $vis = /*@__PURE__*/ _let(8, ($scope) => $show($scope, "i" in $scope ? $scope.i : true));
const $setup__script = _script("a0", ($scope) => _on($scope.g, "click", function() {
	$count($scope, ("h" in $scope ? $scope.h : 3) + 5);
	$vis($scope, !("i" in $scope ? $scope.i : true));
}));
