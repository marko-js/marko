// template.marko
const $n = _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));
