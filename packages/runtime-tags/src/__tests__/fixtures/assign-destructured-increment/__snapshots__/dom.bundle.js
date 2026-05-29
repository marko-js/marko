// total: 2990 (min) 1511 (brotli)
// template.marko: 279 (min) 181 (brotli)
const $pattern2 = ($scope, $pattern) => {
	$foo2($scope, $pattern.foo);
	$fooChange2($scope, $pattern.fooChange);
};
const $bar = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$pattern2($scope, {
		foo: $scope.d,
		fooChange: $foo($scope)
	});
});
const $foo__OR__$fooChange = /* @__PURE__ */ _or(7, _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.f + 1);
})));
const $foo2 = /* @__PURE__ */ _const(5, ($scope) => {
	_text($scope.b, $scope.f);
	$foo__OR__$fooChange($scope);
});
const $fooChange2 = /* @__PURE__ */ _const(6, $foo__OR__$fooChange);
function $foo($scope) {
	return function(v) {
		$bar($scope, v);
	};
}
_resume("a0", $foo);
