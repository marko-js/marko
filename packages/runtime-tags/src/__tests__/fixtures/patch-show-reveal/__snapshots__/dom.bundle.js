// template.marko
const $count = _let(9, ($scope) => _text($scope.e, $scope.j));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.j + 1);
}));
