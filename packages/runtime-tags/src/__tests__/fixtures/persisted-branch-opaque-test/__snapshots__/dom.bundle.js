// template.marko
const $if = /*@__PURE__*/ _if(0, "<p>on</p>");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c && [1].includes(1) ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
