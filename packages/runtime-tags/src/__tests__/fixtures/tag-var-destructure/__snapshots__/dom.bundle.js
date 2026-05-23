// total: 2776 (min) 1427 (brotli)
// template.marko: 410 (min) 233 (brotli)
const $a = /* @__PURE__ */ _let(6, ($scope) => _text($scope.b, $scope.g));
const $b = /* @__PURE__ */ _let(7, ($scope) => _text($scope.c, $scope.h));
const $c = /* @__PURE__ */ _let(8, ($scope) => _text($scope.d, JSON.stringify($scope.i)));
const $d = /* @__PURE__ */ _let(9, ($scope) => _text($scope.e, $scope.j));
const $e = /* @__PURE__ */ _let(10, ($scope) => _text($scope.f, JSON.stringify($scope.k)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	let local;
	(($result2, $a2, $b2, unused, $c2) => ({a: $a2, _b: {_b: $b2}, local, unused, ...$c2} = $result2, $a($scope, $a2), $b($scope, $b2), $c($scope, $c2), $result2))({
		a: 1,
		_b: { _b: 2 },
		local: 3,
		c: 4
	});
	(($result, $d2, $e2) => ([{arr: [local, $d2, , ...$e2]}] = $result, $d($scope, $d2), $e($scope, $e2), $result))([{ arr: [
		6,
		7,
		8,
		9
	] }]);
}));
