// tags/panel.marko
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("3 b5,4 b6", /*@__PURE__*/ _or_resume("b3", 1, ($scope) => _text($scope.a, $scope._.d + ":" + $scope._.e)), _closure_subscribers, 6, 0);
const $Info_content__input_a = /*@__PURE__*/ _closure_get(6, $Info_content__input_a__OR__input_b, 0, "b1");
const $input_a__closure = /*@__PURE__*/ _closure($Info_content__input_a);
const $input_a = /*@__PURE__*/ _const(3, $input_a__closure);

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
