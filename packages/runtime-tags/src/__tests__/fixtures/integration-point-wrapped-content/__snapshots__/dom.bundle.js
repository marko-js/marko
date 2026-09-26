// template.marko
const $if = /*@__PURE__*/ _if(0, "<input value=name>");
const $editing = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$editing($scope, !$scope.c);
}));
