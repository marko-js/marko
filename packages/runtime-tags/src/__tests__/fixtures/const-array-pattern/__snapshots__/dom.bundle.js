// template.marko
const $n = /*@__PURE__*/ _let(13, /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.n)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.n + 1);
}));
