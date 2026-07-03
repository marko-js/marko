// template.marko
const $x = /* @__PURE__ */ _let(3, ($scope) => _text($scope.a, $scope.d));
const $y = /* @__PURE__ */ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$x($scope, "X2");
	$y($scope, "Y2");
}));
