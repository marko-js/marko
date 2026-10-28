// tags/child.marko
const $input_name__OR__uid = /*@__PURE__*/ _or(6, ($scope) => _text($scope.a, $scope.f + "-" + $scope.e));
const $uid = fill("b1", /*@__PURE__*/ _let(5, $input_name__OR__uid));
const $input_name = fill("b0", /*@__PURE__*/ _const(4, $input_name__OR__uid));

// template.marko
const $n = /*@__PURE__*/ _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.h + 1);
}));
