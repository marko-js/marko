// tags/kid.marko
const $input_a__OR__input_b = /*@__PURE__*/ _patch_or("b0", 5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $input_a = /*@__PURE__*/ _const(3, $input_a__OR__input_b);

// template.marko
const $s = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => $input_a($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.f + 1);
}));
