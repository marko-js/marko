// template.marko
const $for_content2__$params = ($scope, $params3) => _text($scope.a, $params3[0]);
const $if2 = /*@__PURE__*/ _if(2, "<span>if state</span>");
const $for2 = /*@__PURE__*/ _for_of_unkeyed(4, "<p> </p>", "D ", 0, $for_content2__$params);
const $show2 = /*@__PURE__*/ _show(6);
const $open = /*@__PURE__*/ _let(11, ($scope) => {
	$if2($scope, $scope.l ? 0 : 1);
	$for2($scope, [$scope.l ? ["x", "y"] : ["x"]]);
	$show2($scope, $scope.l);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.l);
}));
