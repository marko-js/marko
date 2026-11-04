// template.marko
const $D_content__x = /*@__PURE__*/ _fill_let("a3", 5, ($scope) => _text($scope.b, $scope.f));
const $D_content__v = $D_content__x;
const $D_content__setup = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$D_content__x($scope, +$scope.f + 1);
}));
const $n = _let(1, ($scope) => $D_content__v($scope.a, $scope.b));
