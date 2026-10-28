// tags/panel.marko
const $if_content3__input_b__OR__input_a = /*@__PURE__*/ _fill_join_if("b11", 5, /*@__PURE__*/ _fill_join_if("b10 | b9", 4, /*@__PURE__*/ _or_resume("b7", 1, ($scope) => _text($scope.a, $scope._._.f + ":" + $scope._._.e)), 0, 0, 1, 0), 0, 0, 1, 0);
const $if_content3__input_a = /*@__PURE__*/ _closure_get(8, $if_content3__input_b__OR__input_a, ($scope) => $scope._._, "b6");
const $input_a__closure = /*@__PURE__*/ _closure($if_content3__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);

// template.marko
const $count = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
