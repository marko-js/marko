// template.marko
const $o__OR__rest = /*@__PURE__*/ _or(12, ($scope) => _text($scope.b, $scope.i[$scope.l] ?? "-"));
const $o__OR__$pattern_b = /*@__PURE__*/ _or(14, ($scope) => _text($scope.c, $scope.i[$scope.n] ?? "-"));
const $o__OR__key_name = /*@__PURE__*/ _or(17, ($scope) => _text($scope.d, $scope.i[$scope.q] ?? "-"));
const $o = /*@__PURE__*/ _let(8, ($scope) => {
	$o__OR__rest($scope);
	$o__OR__$pattern_b($scope);
	$o__OR__key_name($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$scope.i[$scope.l] = 1;
	$scope.i[$scope.n] = 2;
	$scope.i[$scope.p] = 3;
	$o($scope, { ...$scope.i });
}));
