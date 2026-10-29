// template.marko
const $wrapper_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$shown($scope._, $scope.b);
}));
const $shown = _let(5, ($scope) => _text($scope.b, $scope.f));
