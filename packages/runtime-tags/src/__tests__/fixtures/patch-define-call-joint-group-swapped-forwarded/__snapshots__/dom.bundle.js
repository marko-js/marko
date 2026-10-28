// template.marko
const $Forward_content__x = ($scope, x) => $Show_content__a($scope.a, x);
const $Forward_content__y = ($scope, y) => $Show_content__b($scope.a, y);
const $if_content__input_label = /*@__PURE__*/ _fill_join_closure("a6", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a0"), 0);
const $Show_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_label);
const $Show_content__a__OR__b = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _fill_join("a2", 3, /*@__PURE__*/ _or(5, ($scope) => $Show_content__if($scope, $scope.d || $scope.e ? 0 : 1))));
const $Show_content__a = /*@__PURE__*/ _const(3, $Show_content__a__OR__b);
const $Show_content__b = /*@__PURE__*/ _const(4, $Show_content__a__OR__b);
const $on = /*@__PURE__*/ _let(7, ($scope) => {
	$Forward_content__x($scope.a, $scope.h);
	$Forward_content__y($scope.b, $scope.h);
});
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$on($scope, !$scope.h);
}));
