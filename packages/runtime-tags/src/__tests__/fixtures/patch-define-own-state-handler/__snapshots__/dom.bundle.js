// template.marko
const $Row_content__shown = _let(5, ($scope) => _text($scope.b, $scope.f));
const $Row_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Row_content__shown($scope, $scope.e);
}));
