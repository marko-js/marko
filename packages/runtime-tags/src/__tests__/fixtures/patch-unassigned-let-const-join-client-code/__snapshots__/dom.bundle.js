// template.marko
const $tag = ($scope, tag) => _text($scope.a, tag);
const $input_name__OR__uid = /*@__PURE__*/ _or(8, ($scope) => $tag($scope, $scope.h + "-" + $scope.g));
const $uid = fill("a2", /*@__PURE__*/ _let(7, $input_name__OR__uid));
const $input_name = fill("a1", /*@__PURE__*/ _const(6, $input_name__OR__uid));
const $n = /*@__PURE__*/ _let(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.k + 1);
}));
