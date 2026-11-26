// template.marko
_content("a1");
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
