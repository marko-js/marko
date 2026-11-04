// tags/child.marko
const $Inner_content__input_x__OR__k = /*@__PURE__*/ _or_patch("b2", 4, ($scope) => _text($scope.a, $scope._.e + $scope.d));
const $Inner_content__k = /*@__PURE__*/ _const(3, $Inner_content__input_x__OR__k);
const $n = /*@__PURE__*/ _fill_let("b4", 5, ($scope) => $Inner_content__k($scope.b, $scope.f));
const $setup__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
