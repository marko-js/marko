// tags/child-b/index.marko
const $input_a = /*@__PURE__*/ _render(($scope, input_a) => _text($scope.a, input_a));

// template.marko
const $n__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$n__render($scope);
	$input_a($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
