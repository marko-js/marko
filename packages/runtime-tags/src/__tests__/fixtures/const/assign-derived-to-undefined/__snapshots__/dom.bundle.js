// template.marko
const $list = /*@__PURE__*/ _let(3, ($scope) => {
	$first($scope, $scope.d[0]);
	$second($scope, $scope.d[1]);
});
const $first = /*@__PURE__*/ _const(4, ($scope) => _text($scope.a, $scope.e));
const $second = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$list($scope, [4]);
}));
