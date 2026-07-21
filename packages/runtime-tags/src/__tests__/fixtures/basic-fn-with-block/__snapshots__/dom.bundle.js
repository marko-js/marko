// template.marko
const $count = /*@__PURE__*/ _let(2, /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
