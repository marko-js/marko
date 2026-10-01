// template.marko
const $for_content2__item = ($scope, item) => _text($scope.a, item);
const $for_content2__$params = ($scope, $params3) => $for_content2__item($scope, $params3[0]);
const $if2 = /*@__PURE__*/ _if(2, "<span>if state</span>");
const $for2 = /*@__PURE__*/ _for_of_unkeyed(4, "<p> </p>", "D ", 0, $for_content2__$params);
const $show2 = /*@__PURE__*/ _show(8, 7);
const $open = /*@__PURE__*/ _let(13, ($scope) => {
	$if2($scope, $scope.n ? 0 : 1);
	$for2($scope, [$scope.n ? ["x", "y"] : ["x"]]);
	$show2($scope, $scope.n);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.n);
}));
