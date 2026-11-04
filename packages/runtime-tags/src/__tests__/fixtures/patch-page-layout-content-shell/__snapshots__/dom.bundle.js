// template.marko
const $layout_content__n = _let(3, ($scope) => _text($scope.b, $scope.d));
const $layout_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$layout_content__n($scope, +$scope.d + 1);
}));
