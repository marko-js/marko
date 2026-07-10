// template.marko
const $if = /*@__PURE__*/ _if(1, "hi", "b");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, ("c" in $scope ? $scope.c : false) ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !("c" in $scope ? $scope.c : false));
}));
