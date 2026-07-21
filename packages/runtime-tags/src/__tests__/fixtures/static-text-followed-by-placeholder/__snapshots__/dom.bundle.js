// template.marko
const $count = /*@__PURE__*/ _let(2, /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.c)));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.c + 1);
}));
