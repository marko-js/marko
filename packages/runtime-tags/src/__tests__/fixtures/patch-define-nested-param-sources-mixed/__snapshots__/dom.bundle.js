// template.marko
const $Outer_content__a__OR__b = /*@__PURE__*/ _fill_join("a3", 4, /*@__PURE__*/ _or(5, ($scope) => $Inner_content__v($scope.a, $scope.d || $scope.e)));
const $Outer_content__a = /*@__PURE__*/ _const(3, $Outer_content__a__OR__b);
const $if_content__input_label = /*@__PURE__*/ _fill_join_closure("a5", 4, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0"), 0);
const $Inner_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_label);
const $Inner_content__v = ($scope, v) => $Inner_content__if($scope, v ? 0 : 1);
const $n = /*@__PURE__*/ _let(6, ($scope) => $Outer_content__a($scope.a, $scope.g % 2 === 0));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
