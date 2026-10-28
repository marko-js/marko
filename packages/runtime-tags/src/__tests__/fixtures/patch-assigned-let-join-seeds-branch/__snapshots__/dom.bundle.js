// template.marko
const $if_content2__input_a = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a6", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a1"), 0));
const $if_content2__setup = $if_content2__input_a;
const $if_content__input_b__OR__x = /*@__PURE__*/ _fill_join_if("a7", 5, /*@__PURE__*/ _or_resume("a9", 4, ($scope) => _text($scope.c, $scope.d + $scope._.f)), 0, 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<span> </span>", "D ", $if_content2__setup);
const $if_content__y = /*@__PURE__*/ _let(5, ($scope) => $if_content__if($scope, $scope.f ? 0 : 1));
const $if_content__x = /*@__PURE__*/ _fill_let("a5", 3, ($scope) => {
	$if_content__y($scope, $scope.d);
	$if_content__input_b__OR__x($scope);
});
const $if_content__setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$if_content__x($scope, 2);
}));
