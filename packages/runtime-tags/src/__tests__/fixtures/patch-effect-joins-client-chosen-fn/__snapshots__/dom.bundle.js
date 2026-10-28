// template.marko
const $n__OR__pick__script = _script("a3", ($scope) => console.log("run", $scope.j(), $scope.f));
const $n__OR__pick = /*@__PURE__*/ _or(10, $n__OR__pick__script);
const $pick = /*@__PURE__*/ _const(9, $n__OR__pick);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("a4", 8, ($scope) => $pick($scope, $scope.e ? $scope.g : $scope.h), 2);
const $upper = _let(4, $upper__OR__up__OR__low);
const $n = _let(5, $n__OR__pick);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$upper($scope, !$scope.e);
	$n($scope, +$scope.f + 1);
}));
const $up = ($scope) => () => "U" + $scope.d;
const $low = ($scope) => () => "l" + $scope.d;
_bind_resume("a0 d", $up);
_bind_resume("a1 d", $low);
