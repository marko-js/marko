// total: 2629 (min) 1370 (brotli)
// template.marko: 141 (min) 109 (brotli)
const $x__OR__y = /* @__PURE__ */ _or(5, _script("a0", ($scope) => _on($scope.a, "click", () => $x($scope, $y($scope, $scope.d + $scope.e)))));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$x__OR__y($scope);
});
