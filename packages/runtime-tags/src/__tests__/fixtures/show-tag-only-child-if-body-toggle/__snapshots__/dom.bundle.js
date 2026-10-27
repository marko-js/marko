// template.marko
const $if = /*@__PURE__*/ _if(2, "<p>yes</p>", 0, 0, "<i>no</i>");
const $show2 = /*@__PURE__*/ _show(1);
const $show = /*@__PURE__*/ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$show2($scope, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
