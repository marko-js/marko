// total: 3004 (min) 1485 (brotli)
// template.marko: 287 (min) 173 (brotli)
const $y__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$y($scope, $scope.h + 1);
}));
const $y = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$y__script($scope);
});
const $x__OR__yChange = /* @__PURE__ */ _or(6, ($scope) => $y($scope, $scope.e, $scope.f));
const $x = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$x__OR__yChange($scope);
});
const $yChange2 = /* @__PURE__ */ _let(5, $x__OR__yChange);
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$yChange2($scope, null);
}));
function $yChange($scope) {
	return function(newValue) {
		$x($scope, newValue + 1);
	};
}
_resume("a0", $yChange);
