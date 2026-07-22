// template.marko
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.c));
const $x__script = _script("a0", ($scope) => {
	$y($scope, $scope.c);
	$x($scope, 2);
});
const $x = /*@__PURE__*/ _let(2, ($scope) => {
	$x__render($scope);
	$x__script($scope);
});
const $y = /*@__PURE__*/ _let(3, /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d)));
