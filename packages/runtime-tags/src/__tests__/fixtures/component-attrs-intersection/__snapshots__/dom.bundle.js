// tags/display-intersection.marko
const $input_value__OR__dummy = /*@__PURE__*/ _or(5, ($scope) => _text($scope.a, ($scope.e, $scope.d)));
const $value = /*@__PURE__*/ _const(3, $input_value__OR__dummy);

// template.marko
const $count__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /*@__PURE__*/ _let(2, ($scope) => {
	$value($scope.a, $scope.c);
	$count__script($scope);
});
