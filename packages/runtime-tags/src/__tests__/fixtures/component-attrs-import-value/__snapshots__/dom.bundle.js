// tags/counter.marko
const $input__OR__count = /*@__PURE__*/ _or(5, ($scope) => _text($scope.b, $scope.d.format("e" in $scope ? $scope.e : 0)));
const $count = /*@__PURE__*/ _let(4, $input__OR__count);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, ("e" in $scope ? $scope.e : 0) + 1);
}));
