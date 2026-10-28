// template.marko
const $if_content__a = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Wrapper_content__b($scope.a, $scope._.e)));
const $if_content__b = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Wrapper_content__a($scope.a, $scope._.f)));
const $Wrapper_content__a = /*@__PURE__*/ _const(4, ($scope) => {
	$Outer_content__tag_input_x($scope.a, $scope.e);
	$if_content__a($scope);
});
const $Wrapper_content__b = /*@__PURE__*/ _const(5, ($scope) => {
	$Outer_content__y($scope.a, $scope.f);
	$if_content__b($scope);
});
const $Inner_content__input_label__OR__x__OR__z = /*@__PURE__*/ _fill_signal("4 | a11,3 | a5", /*@__PURE__*/ _or_resume("a3", 4, ($scope) => _text($scope.a, $scope._._.e + $scope._.d + $scope.d), 2));
const $Inner_content__x = /*@__PURE__*/ _closure_get(8, $Inner_content__input_label__OR__x__OR__z, 0, "a2");
const $Inner_content__z = /*@__PURE__*/ _const(3, $Inner_content__input_label__OR__x__OR__z);
const $Outer_content__y = ($scope, y) => $Inner_content__z($scope.a, y);
const $Outer_content__tag_input_x = /*@__PURE__*/ _fill_const("a5", 3, /* @__PURE__ */ _closure($Inner_content__x));
const $n = /*@__PURE__*/ _let(6, ($scope) => $Wrapper_content__b($scope.a, $scope.g));
const $setup__script = _script("a10", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
