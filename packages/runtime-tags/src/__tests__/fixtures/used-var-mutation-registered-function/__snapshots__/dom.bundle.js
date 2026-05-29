// total: 2657 (min) 1366 (brotli)
// template.marko: 99 (min) 85 (brotli)
const identity = (fn) => fn;
const $value = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", identity(() => {
	$value($scope, "updated");
})));
