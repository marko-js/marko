// template.marko
const $y = /* @__PURE__ */ _let_change(6, ($scope) => _text($scope.c, $scope.g));
const $x__OR__handler = /* @__PURE__ */ _or(5, ($scope) => $y($scope, $scope.d, $scope.e));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$x__OR__handler($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$y($scope, $scope.g + 1);
}));
function $handler($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("a0", $handler);
