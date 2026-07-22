// template.marko
const $y = /*@__PURE__*/ _let_change(4, /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.e)));
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $x = /*@__PURE__*/ _let(3, ($scope) => {
	$x__render($scope);
	$y($scope, $scope.d, $valueChange($scope));
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$y($scope, $scope.e + 1);
}));
function $valueChange($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("a0", $valueChange);
