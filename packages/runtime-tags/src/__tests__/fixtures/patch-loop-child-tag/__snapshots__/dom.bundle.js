// template.marko
const $count = _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
