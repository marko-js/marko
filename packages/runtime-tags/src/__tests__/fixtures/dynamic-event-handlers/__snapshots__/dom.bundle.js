// template.marko
const $clickCount__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c));
const $clickCount__script = _script("a0", ($scope) => _on($scope.a, "click", $scope.c <= 1 ? () => {
	$clickCount($scope, $scope.c + 1);
} : false));
const $clickCount = /*@__PURE__*/ _let(2, ($scope) => {
	$clickCount__render($scope);
	$clickCount__script($scope);
});
