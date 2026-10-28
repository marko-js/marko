// template.marko
const $input_name__OR__uid = /*@__PURE__*/ _or(8, ($scope) => _attr($scope.a, "title", `${$scope.h}-${$scope.g}`));
const $uid = _let(7, $input_name__OR__uid);
const $input_name = fill("a1", /*@__PURE__*/ _const(6, $input_name__OR__uid));
const $n = /*@__PURE__*/ _let(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.j + 1);
}));
