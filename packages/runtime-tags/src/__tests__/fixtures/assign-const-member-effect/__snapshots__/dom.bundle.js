// template.marko
const $live__OR__count = /*@__PURE__*/ _or(4, _script("a1", ($scope) => console.log("effect", $scope.d, $scope.c.open)));
const $count = /*@__PURE__*/ _let(3, $live__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$scope.c.open = true;
	$count($scope, +$scope.d + 1);
}));
