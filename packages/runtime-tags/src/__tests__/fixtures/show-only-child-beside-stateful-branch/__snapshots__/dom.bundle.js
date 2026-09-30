// template.marko
const $if = /*@__PURE__*/ _if(1, "<p>menu</p>");
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
