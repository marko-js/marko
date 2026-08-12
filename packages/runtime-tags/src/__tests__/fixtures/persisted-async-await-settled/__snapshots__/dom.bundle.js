// template.marko
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
