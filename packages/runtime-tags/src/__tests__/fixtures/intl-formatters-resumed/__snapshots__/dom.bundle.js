// template.marko
const $n__OR__money = /*@__PURE__*/ _or(5, ($scope) => _text($scope.b, $scope.e.format($scope.d)));
const $n__OR__day = /*@__PURE__*/ _or(7, ($scope) => _text($scope.c, $scope.g.format(new Date($scope.d))));
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	$n__OR__money($scope);
	$n__OR__day($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1e3);
}));
