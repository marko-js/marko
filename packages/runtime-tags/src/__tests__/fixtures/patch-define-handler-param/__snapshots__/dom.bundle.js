// template.marko
const $Card_content__setup = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$cart($scope._, [...$scope._.f, $scope.e]);
}));
const $cart = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f.join(",")));
