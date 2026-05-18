// total: 2645 (min) 1377 (brotli)
// template.marko: 145 (min) 107 (brotli)
const $x__OR__y__script = _script("a0", ($scope) => _on($scope.a, "click", () => $x($scope, $y($scope, $scope.d + $scope.e))));
const $x__OR__y = /* @__PURE__ */ _or(5, $x__OR__y__script);
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$x__OR__y($scope);
});
