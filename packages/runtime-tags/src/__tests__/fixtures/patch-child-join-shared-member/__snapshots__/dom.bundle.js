// tags/row.marko
const $input_a__OR__input_b = /*@__PURE__*/ _patch_or("b0", 6, ($scope) => _text($scope.a, $scope.e + $scope.f));
const $input_a = /*@__PURE__*/ _const(4, $input_a__OR__input_b);
const $input_b__OR__input_y = /*@__PURE__*/ _patch_or("b1", 8, ($scope) => _text($scope.b, $scope.h + $scope.f));
const $input_b = /*@__PURE__*/ _const(5, ($scope) => {
	$input_a__OR__input_b($scope);
	$input_b__OR__input_y($scope);
});
const $input_y = /*@__PURE__*/ _const(7, $input_b__OR__input_y);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => {
	$input_a($scope.a, $scope.i);
	$input_b($scope.a, $scope.i);
	$input_a($scope.b, $scope.i);
	$input_a($scope.c, $scope.i);
	$input_y($scope.c, $scope.i);
});
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$n($scope, +$scope.i + 1);
}));
