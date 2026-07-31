// template.marko
const $if = /*@__PURE__*/ _if(1, "<span>A</span>", 0, 0, "<span>B</span>");
const $flip = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$flip($scope, !$scope.d);
}));
