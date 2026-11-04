// template.marko
const $n = _let(3, ($scope) => _text($scope.c, $scope.d));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.d + 1);
}));
