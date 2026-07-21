// template.marko
const $gradId = /*@__PURE__*/ _let(3, ($scope) => _attr($scope.a, "id", $scope.d));
const $if = /*@__PURE__*/ _if(1, "<rect width=10 height=10></rect>", "b");
const $show = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$gradId($scope, "grad2");
	$show($scope, !$scope.e);
}));
