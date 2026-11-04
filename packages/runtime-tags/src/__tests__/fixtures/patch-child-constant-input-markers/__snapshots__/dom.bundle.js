// template.marko
const $count = _let(11, ($scope) => _text($scope.g, $scope.l));
const $setup__script = _script("a1", ($scope) => _on($scope.f, "click", function() {
	$count($scope, +$scope.l + 1);
}));
