// template.marko
const $count = _let(10, ($scope) => _text($scope.e, $scope.k));
const $setup__script = _script("a3", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.k + 1);
}));
