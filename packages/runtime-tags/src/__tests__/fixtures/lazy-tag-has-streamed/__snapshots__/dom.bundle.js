// template.marko
const $await_content2__b = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $await_content2__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$await_content2__b($scope, $scope.c + 1);
}));
const $await_content__a = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $await_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$await_content__a($scope, $scope.c + 1);
}));
