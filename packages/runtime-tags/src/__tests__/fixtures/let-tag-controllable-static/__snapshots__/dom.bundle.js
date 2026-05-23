// total: 2584 (min) 1339 (brotli)
// template.marko: 203 (min) 135 (brotli)
const $y__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$y($scope, $scope.e + 1);
}));
const $y = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.c, $scope.e);
	$y__script($scope);
});
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$y($scope, $scope.d, $valueChange($scope));
});
function $valueChange($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("a0", $valueChange);
