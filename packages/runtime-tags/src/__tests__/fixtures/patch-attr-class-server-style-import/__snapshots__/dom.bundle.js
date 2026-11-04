// template.marko
const $count = _let(7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
