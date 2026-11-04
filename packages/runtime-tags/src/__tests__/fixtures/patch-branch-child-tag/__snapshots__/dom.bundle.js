// template.marko
const $count = _let(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.i + 1);
}));
