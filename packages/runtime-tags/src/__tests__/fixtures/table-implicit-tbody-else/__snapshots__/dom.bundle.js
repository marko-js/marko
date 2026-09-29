// template.marko
const $if = /*@__PURE__*/ _if(0, "<caption>loading</caption>", 0, 0, "<tr><td>loaded</td></tr>");
const $loading = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$loading($scope, !$scope.c);
}));
