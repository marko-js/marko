// template.marko
const $if_content__notes = /*@__PURE__*/ _fill_let("a0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__notes($scope, +$scope.c + 1);
}));
