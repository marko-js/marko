// template.marko
const $layout_content__n = /*@__PURE__*/ _fill_let("a3", 3, ($scope) => _text($scope.b, $scope.d));
const $layout_content__setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$layout_content__n($scope, +$scope.d + 1);
}));
