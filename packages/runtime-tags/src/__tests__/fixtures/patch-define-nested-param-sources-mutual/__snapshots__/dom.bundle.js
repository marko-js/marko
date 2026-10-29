// template.marko
const $if_content__b = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Relay_content__a($scope.a, $scope._.f)));
const $Relay_content__a = ($scope, a) => $Wrapper_content__tag_input_b($scope.a, a);
const $Wrapper_content__tag_input_b = /*@__PURE__*/ _const(5, ($scope) => {
	$Outer_content__y($scope.a, $scope.f);
	$if_content__b($scope);
});
const $Inner_content__input_label__OR__x__OR__z = /*@__PURE__*/ _fill_join("| a5", 3, /*@__PURE__*/ _fill_join("| a12", 4, /*@__PURE__*/ _or_resume("a3", 4, ($scope) => _text($scope.a, $scope._._.e + $scope._.d + $scope.d), 2)));
const $Inner_content__z = /*@__PURE__*/ _const(3, $Inner_content__input_label__OR__x__OR__z);
const $Outer_content__y = ($scope, y) => $Inner_content__z($scope.a, y);
const $n = _let(6, ($scope) => $Wrapper_content__tag_input_b($scope.a, $scope.g));
const $setup__script = _script("a11", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
