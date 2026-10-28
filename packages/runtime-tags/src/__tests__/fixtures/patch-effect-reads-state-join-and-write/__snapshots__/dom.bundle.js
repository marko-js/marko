// template.marko
const $input_other__OR__x__script = _script("a0", ($scope) => console.log("run", $scope.i, $scope.f));
const $input_other__OR__x = /*@__PURE__*/ _or(9, $input_other__OR__x__script);
const $x = /*@__PURE__*/ _const(8, ($scope) => {
	_text($scope.b, $scope.i);
	$input_other__OR__x($scope);
});
const $input_label__OR__n = /*@__PURE__*/ _fill("a2", 4, /*@__PURE__*/ _or(7, ($scope) => $x($scope, $scope.g + $scope.e)));
const $n = _let(6, $input_label__OR__n);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
