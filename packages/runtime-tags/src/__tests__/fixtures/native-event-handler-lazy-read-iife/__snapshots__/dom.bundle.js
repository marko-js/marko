// template.marko
const $n__OR__log = /*@__PURE__*/ _or(6, _script("a0", ($scope) => _on($scope.b, "click", (() => {
	const captured = $scope.e;
	return () => {
		$log($scope, `${$scope.f}[${captured}:${$scope.e}]`);
	};
})())));
const $n__render = /*@__PURE__*/ _render(($scope) => _text($scope.c, $scope.e));
const $n = /*@__PURE__*/ _let(4, ($scope) => {
	$n__render($scope);
	$n__OR__log($scope);
});
const $log__render = /*@__PURE__*/ _render(($scope) => _text($scope.d, $scope.f));
const $log = /*@__PURE__*/ _let(5, ($scope) => {
	$log__render($scope);
	$n__OR__log($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.e + 1);
}));
