// total: 2681 (min) 1383 (brotli)
// template.marko: 199 (min) 122 (brotli)
const $a__OR__b = /* @__PURE__ */ _or(7, ($scope) => _text($scope.e, $scope.f + $scope.g));
const $a = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$a__OR__b($scope);
});
const $b = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$a__OR__b($scope);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$a($scope, 10);
	});
	_on($scope.c, "click", function() {
		$b($scope, 5);
	});
});
