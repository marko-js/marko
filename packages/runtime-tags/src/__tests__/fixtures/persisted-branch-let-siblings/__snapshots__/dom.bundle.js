// template.marko
const $if_content2__y = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content2__setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$if_content2__y($scope, $scope.c + 1);
}));
const $if_content__x = /*@__PURE__*/ _fill_let("a0", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$if_content__x($scope, $scope.c + 1);
}));
