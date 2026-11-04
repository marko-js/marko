// template.marko
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.f + (($scope.g + 1) * 100 + $scope.e));
}));
const $count = _let(5, ($scope) => _text($scope.b, $scope.f));
