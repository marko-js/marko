// template.marko
const $Wrapper_content__b = ($scope, b) => $Outer_content__y($scope.a, b);
const $Inner_content__input_label__OR__x__OR__z = /*@__PURE__*/ _fill("| a5", 3, /*@__PURE__*/ _fill("| a8", 4, /*@__PURE__*/ _or_resume("a1", 4, ($scope) => _text($scope.a, $scope._._.e + $scope._.d + $scope.d), 2)));
const $Inner_content__z = /*@__PURE__*/ _const(3, $Inner_content__input_label__OR__x__OR__z);
const $Outer_content__y = ($scope, y) => $Inner_content__z($scope.a, y);
const $n = _let(6, ($scope) => $Wrapper_content__b($scope.a, $scope.g));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
