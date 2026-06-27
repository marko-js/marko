// template.marko
const $pattern2 = ($scope, $pattern) => {
	$foo2($scope, $pattern.foo);
	$fooChange2($scope, $pattern.fooChange);
};
const $foo__OR__$fooChange = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g($scope.f + 1);
}));
const $bar = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$pattern2($scope, {
		foo: $scope.d,
		fooChange: $foo($scope)
	});
	$foo__OR__$fooChange($scope);
});
const $foo2 = /* @__PURE__ */ _const(5, ($scope) => _text($scope.b, $scope.f));
const $fooChange2 = /* @__PURE__ */ _const(6);
function $foo($scope) {
	return function(v) {
		$bar($scope, v);
	};
}
_resume("a0", $foo);
