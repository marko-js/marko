// template.marko
const $wrap_content__x_n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $wrap_content__x = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $wrap_content__setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$wrap_content__x($scope, +$scope.d + 1);
}));
const $x = /*@__PURE__*/ _let(2, ($scope) => $x_n($scope, $scope.c.n));
const $x_n__closure = /*@__PURE__*/ _closure($wrap_content__x_n);
const $x_n__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$x($scope, { n: $scope.d + 1 });
}));
const $x_n = /*@__PURE__*/ _const(3, ($scope) => {
	$x_n__closure($scope);
	$x_n__script($scope);
});
