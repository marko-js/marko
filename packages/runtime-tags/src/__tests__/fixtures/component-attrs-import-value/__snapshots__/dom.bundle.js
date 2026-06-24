// tags/counter.marko
const $input__OR__count = /*@__PURE__*/ _or(5, ($scope) => _text($scope.b, $scope.d.format($scope.e)));
const $count__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	$input__OR__count($scope);
	$count__script($scope);
});
