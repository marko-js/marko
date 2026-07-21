// template.marko
const $increment2 = /*@__PURE__*/ _const(3, _script("a1", ($scope) => _on($scope.a, "click", $scope.d)));
const $clickCount__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c));
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => {
	$clickCount__render($scope);
	$increment2($scope, $increment($scope));
});
function $increment($scope) {
	return function() {
		$clickCount($scope, $scope.c + 1);
	};
}
_resume("a0", $increment);
