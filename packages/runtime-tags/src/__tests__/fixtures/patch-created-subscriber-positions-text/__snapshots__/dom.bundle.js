// tags/panel.marko
const $if_content3__input_b__OR__input_a = /*@__PURE__*/ _fill_signal("4 b10 | b9,5 b11", /*@__PURE__*/ _or_resume("b7", 1, ($scope) => _text($scope.a, $scope._._.f + ":" + $scope._._.e)), ($signal) => /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _if_closure(1, 0, $signal)));
const $if_content3__input_a = /*@__PURE__*/ _closure_get(8, $if_content3__input_b__OR__input_a, ($scope) => $scope._._, "b6");
const $input_a__closure = /*@__PURE__*/ _closure($if_content3__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
