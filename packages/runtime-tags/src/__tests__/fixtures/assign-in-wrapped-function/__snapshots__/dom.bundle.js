// template.marko
function identity(fn) {
	return fn;
}
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", identity(() => {
	$count($scope, $scope.c + 1);
})));
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$count__script($scope);
});
