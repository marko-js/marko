// template.marko
function identity(fn) {
	return fn;
}
const $count__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c));
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", identity(() => {
	$count($scope, $scope.c + 1);
})));
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	$count__render($scope);
	$count__script($scope);
});
