// template.marko
const $Inner_content__input_x__OR__k = /*@__PURE__*/ _or_patch("a1", 4, ($scope) => _text($scope.a, $scope._.e + $scope.d));
const $Inner_content__k = /*@__PURE__*/ _const(3, $Inner_content__input_x__OR__k);
const $n = _let(5, ($scope) => $Inner_content__k($scope.b, $scope.f));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
