// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _attr_class($scope.a, {
	"": $scope.c % 2,
	odd: $scope.c % 2
}));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.c + 1);
}));
