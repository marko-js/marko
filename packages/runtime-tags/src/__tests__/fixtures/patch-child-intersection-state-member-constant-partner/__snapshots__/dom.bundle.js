// tags/child.marko
const $input_x__OR__input_k = /*@__PURE__*/ _or_patch("b0", 5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $input_k = /*@__PURE__*/ _const(4, $input_x__OR__input_k);

// template.marko
const $n = _let(6, ($scope) => $input_k($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
