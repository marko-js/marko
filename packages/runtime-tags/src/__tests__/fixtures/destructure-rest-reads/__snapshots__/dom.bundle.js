// template.marko
const $list = /*@__PURE__*/ _let(5, ($scope) => {
	(([, ...rest]) => $rest($scope, rest))($scope.f);
	$first($scope, $scope.f[0]);
	$list_($scope, $scope.f[1]);
	$list_2($scope, $scope.f[2]);
});
const $rest = /*@__PURE__*/ _const(7, ($scope) => $rest_length($scope, $scope.h.length));
const $rest_length = /*@__PURE__*/ _const(10, ($scope) => _text($scope.d, $scope.k));
const $first = /*@__PURE__*/ _const(6, ($scope) => _text($scope.a, $scope.g));
const $list_ = /*@__PURE__*/ _const(8, ($scope) => _text($scope.b, $scope.i));
const $list_2 = /*@__PURE__*/ _const(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$list($scope, [4, 5]);
}));
