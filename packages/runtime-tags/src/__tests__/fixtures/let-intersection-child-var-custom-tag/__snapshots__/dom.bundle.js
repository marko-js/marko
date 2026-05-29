// total: 3308 (min) 1660 (brotli)
// tags/let-global.marko: 234 (min) 178 (brotli)
const subsByKey = {};
const $value = /* @__PURE__ */ _let(3, ($scope) => _return($scope, $scope.d));
const $input_value__script = _script("c1", ($scope) => {
	{
		const subs = subsByKey[$scope.c] ??= /* @__PURE__ */ new Set();
		const sub = () => $value($scope, $scope.$[$scope.c]);
		$signal($scope, 0).onabort = () => subs.delete(sub);
		subs.add(sub);
	}
});
function $valueChange($scope) {
	return function(next) {
		$scope.$[$scope.c] = next;
		subsByKey[$scope.c]?.forEach((cb) => cb());
	};
}
_resume("c0", $valueChange);

// template.marko: 220 (min) 160 (brotli)
const $a__OR__b = /* @__PURE__ */ _or(8, ($scope) => _text($scope.f, `${$scope.g},${$scope.h}`), 1, 1);
const $b = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.d, $scope.h);
	$a__OR__b($scope);
});
const $a = _var_resume("a0", /* @__PURE__ */ _const(6, ($scope) => {
	_text($scope.c, $scope.g);
	$b($scope, $scope.g + 1);
	$a__OR__b($scope);
}));
const $setup__script = _script("a1", ($scope) => _on($scope.e, "click", function() {
	_var_change($scope.a, 2);
	$b($scope, 2);
}));
