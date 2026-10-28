// template.marko
const $Right_content__w = ($scope, w) => $Inner_content__z($scope.a, w);
const $Left_content__v = ($scope, v) => $Inner_content__z($scope.a, v);
const $Wrapper_content__b = ($scope, b) => $Outer_content__y($scope.a, b);
const $Inner_content__input_label__OR__x__OR__z = /*@__PURE__*/ _fill_signal("4 | a10,4 | a7", /*@__PURE__*/ _or_resume("a1", 4, ($scope) => _text($scope.a, $scope._._.e + $scope._.e + $scope.d), 2));
const $Inner_content__z = /*@__PURE__*/ _const(3, $Inner_content__input_label__OR__x__OR__z);
const $Outer_content__y = ($scope, y) => {
	$Left_content__v($scope.a, y);
	$Right_content__w($scope.b, y);
};
const $n = /*@__PURE__*/ _let(6, ($scope) => $Wrapper_content__b($scope.a, $scope.g));
const $setup__script = _script("a9", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
