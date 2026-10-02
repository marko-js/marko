// nested.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + Object.keys($scope.e).length);
}));

// parent.marko
const $await_content__count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.c, $scope.i));
const $await_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$await_content__count($scope, $scope.i + Object.keys($scope.h).length);
}));
