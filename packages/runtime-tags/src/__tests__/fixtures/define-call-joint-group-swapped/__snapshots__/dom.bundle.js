// template.marko
const $if_content__input_label = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a0");
const $Show_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_label);
const $Show_content__a__OR__b = /*@__PURE__*/ _or(5, ($scope) => $Show_content__if($scope, $scope.d || $scope.e ? 0 : 1));
const $Show_content__a = /*@__PURE__*/ _const(3, $Show_content__a__OR__b);
const $Show_content__b = /*@__PURE__*/ _const(4, $Show_content__a__OR__b);
const $on = /*@__PURE__*/ _let(7, ($scope) => {
	$Show_content__a($scope.a, $scope.h);
	$Show_content__b($scope.b, $scope.h);
});
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$on($scope, !$scope.h);
}));
