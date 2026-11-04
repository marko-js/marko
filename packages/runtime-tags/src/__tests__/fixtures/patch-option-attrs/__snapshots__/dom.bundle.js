// template.marko
const $count = _let(10, ($scope) => _text($scope.d, $scope.k));
const $setup__script = _script("a1", ($scope) => _on($scope.e, "click", function() {
	$count($scope, +$scope.k + 1);
}));
