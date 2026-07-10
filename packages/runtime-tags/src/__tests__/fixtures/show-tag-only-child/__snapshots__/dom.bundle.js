// template.marko
const $show = /*@__PURE__*/ _show(1);
const $show2 = /*@__PURE__*/ _show(2);
const $open = /*@__PURE__*/ _let(3, ($scope) => {
	$show($scope, "d" in $scope ? $scope.d : true);
	$show2($scope, !("d" in $scope ? $scope.d : true));
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !("d" in $scope ? $scope.d : true));
}));
