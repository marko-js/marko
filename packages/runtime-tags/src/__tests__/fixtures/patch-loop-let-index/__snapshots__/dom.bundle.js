// template.marko
const $for_content__picks = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => _text($scope.b, $scope.f));
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$for_content__picks($scope, +$scope.f + 1);
}));
