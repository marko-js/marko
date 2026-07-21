// template.marko
const $y = /*@__PURE__*/ _const(6, /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.g)));
const $z = /*@__PURE__*/ _const(7, /*@__PURE__*/ _render(($scope) => _text($scope.d, $scope.h)));
const $a = /*@__PURE__*/ _render(($scope, a) => _text($scope.e, a));
const $y__OR__z = ($scope) => {
	$a($scope, $scope.g + $scope.h);
};
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.f));
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	$x__render($scope);
	$y($scope, $scope.f + 1);
	$z($scope, $scope.f + 2);
	$y__OR__z($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", () => $x($scope, $scope.f + 1) - 1));
