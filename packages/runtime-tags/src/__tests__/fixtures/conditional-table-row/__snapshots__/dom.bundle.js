// template.marko
const $if = /*@__PURE__*/ _if(0, "<tr><td>Hi</td></tr>", "b");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, ("c" in $scope ? $scope.c : false) ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !("c" in $scope ? $scope.c : false));
}));
