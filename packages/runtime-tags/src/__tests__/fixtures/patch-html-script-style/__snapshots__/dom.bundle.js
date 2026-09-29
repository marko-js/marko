// template.marko
const $count = /*@__PURE__*/ _let(9, ($scope) => _text($scope.d, $scope.j));
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$count($scope, +$scope.j + 1);
}));
