// tags/child/index.marko
const $first = /*@__PURE__*/ _render(($scope, first) => _text($scope.a, first));

// template.marko
const $n__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$n__render($scope);
	$first($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
