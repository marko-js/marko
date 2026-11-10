// template.marko
const $Child_content__count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $Child_content__setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$Child_content__count($scope, +$scope.c + 1);
}));
