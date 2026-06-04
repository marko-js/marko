// total: 2668 (min) 1375 (brotli)
// template.marko: 219 (min) 149 (brotli)
const $y__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$y($scope, $scope.g + 1);
}));
const $y = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$y__script($scope);
});
const $x__OR__handler = /* @__PURE__ */ _or(5, ($scope) => $y($scope, $scope.d, $scope.e));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$x__OR__handler($scope);
});
function $handler($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("a0", $handler);
