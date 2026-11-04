// template.marko
const $pattern2 = ($scope, $pattern) => {
	$foo2($scope, $pattern.foo);
	$fooChange2($scope, $pattern.fooChange);
};
const $bar = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$pattern2($scope, {
		foo: $scope.d,
		fooChange: $foo($scope)
	});
});
const $foo2 = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
const $fooChange2__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.g(+$scope.f + 1);
}));
const $fooChange2 = /*@__PURE__*/ _const(6, $fooChange2__script);
const $foo = ($scope) => function(v) {
	$bar($scope, v);
};
_resumed.a0 = $foo;
