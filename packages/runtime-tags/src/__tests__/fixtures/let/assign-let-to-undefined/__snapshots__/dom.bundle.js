// template.marko
const $double = ($scope, double) => _text($scope.a, double == null ? "none" : double);
const $num = /*@__PURE__*/ _let(2, ($scope) => $double($scope, $scope.c && $scope.c * 2));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$num($scope, void 0);
}));
