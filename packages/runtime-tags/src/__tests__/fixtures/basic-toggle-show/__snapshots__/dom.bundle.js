// template.marko
const $show = /*@__PURE__*/ _let(2, /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.c ? "Hello!" : "")));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
