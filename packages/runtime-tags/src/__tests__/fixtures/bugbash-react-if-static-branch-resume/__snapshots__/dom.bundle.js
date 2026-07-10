// template.marko
const $if = /*@__PURE__*/ _if(0, "<span>static content</span>", "b");
const $show = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $if2 = /*@__PURE__*/ _if(1, "<span>other static</span>", "b");
const $hide = /*@__PURE__*/ _let(4, ($scope) => $if2($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.d);
	$hide($scope, !$scope.e);
}));
