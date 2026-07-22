// template.marko
const $b = /*@__PURE__*/ _let(3, /*@__PURE__*/ _render(($scope) => {
	_text($scope.a, $scope.d);
	_text($scope.b, $scope.d);
}));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$b($scope, "filled");
}));
