// template.marko
const $o__OR__rest = /*@__PURE__*/ _or(8, ($scope) => _text($scope.b, $scope.e[$scope.h] ?? "-"));
const $o__OR__$pattern_b = /*@__PURE__*/ _or(10, ($scope) => _text($scope.c, $scope.e[$scope.j] ?? "-"));
const $o = /*@__PURE__*/ _let(4, ($scope) => {
	$o__OR__rest($scope);
	$o__OR__$pattern_b($scope);
});
const $rest__OR__$pattern_b__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$scope.e[$scope.h] = 1;
	$scope.e[$scope.j] = 2;
	$o($scope, { ...$scope.e });
}));
