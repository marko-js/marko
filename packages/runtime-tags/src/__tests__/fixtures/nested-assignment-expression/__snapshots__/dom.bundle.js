// total: 2515 (min) 1306 (brotli)
// template.marko: 168 (min) 126 (brotli)
const $clickCount__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$lastCount2($scope, $lastCount($scope, $clickCount($scope, $scope.e + 1) - 1));
}));
const $clickCount = /* @__PURE__ */ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$clickCount__script($scope);
});
const $lastCount = /* @__PURE__ */ _let(5, ($scope) => _text($scope.c, $scope.f));
const $lastCount2 = /* @__PURE__ */ _let(6, ($scope) => _text($scope.d, $scope.g));
