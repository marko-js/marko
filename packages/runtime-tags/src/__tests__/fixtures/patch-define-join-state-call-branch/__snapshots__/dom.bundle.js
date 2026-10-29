// tags/panel.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_subscribers("b7", 6, /*@__PURE__*/ _fill_subscribers("b6", 5, /*@__PURE__*/ _or_resume("b2", 1, ($scope) => _text($scope.a, $scope._._.f + $scope._._.g)), 9, 0), 10, 0);
const $if_content__input_a = /*@__PURE__*/ _closure_get(9, $if_content__input_a__OR__input_b, ($scope) => $scope._._, "b0");
const $if_content__setup = ($scope) => {
	$if_content__input_a($scope);
	$if_content__input_b($scope);
};
const $if_content__input_b = /*@__PURE__*/ _closure_get(10, $if_content__input_a__OR__input_b, ($scope) => $scope._._, "b1");
const $Row_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $Row_content__show = ($scope, show) => $Row_content__if($scope, show ? 0 : 1);
const $t = /*@__PURE__*/ _fill_let("b8", 8, ($scope) => $Row_content__show($scope.a, $scope.i));
const $setup__script$1 = _script("b5", ($scope) => _on($scope.c, "click", function() {
	$t($scope, !$scope.i);
}));
const $input_b__closure = /*@__PURE__*/ _closure($if_content__input_b);
const $input_b = /*@__PURE__*/ _const(6, $input_b__closure);

// template.marko
const $n = _let(8, ($scope) => $input_b($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.i + "k");
}));
