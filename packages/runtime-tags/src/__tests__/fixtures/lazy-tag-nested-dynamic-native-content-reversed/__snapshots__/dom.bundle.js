// child.marko
const $GrandChild_content__count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $GrandChild_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$GrandChild_content__count($scope, +$scope.c + 1);
}));

// grand-child.marko
const $setup__script = _script("b0", ($scope) => console.log("grand-child"));
