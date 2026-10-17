// tags/panel.marko
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("b6", 4, /*@__PURE__*/ _fill_join_subscribers("b5", 3, /*@__PURE__*/ _shell_or("b4", 1, ($scope) => _text($scope.a, $scope._.d + ":" + $scope._.e)), 6, 0), 7, 0);
const $Info_content__input_a = _closure_resume("b2", /*@__PURE__*/ _closure_get(6, $Info_content__input_a__OR__input_b));
const $Info_content__input_b = _closure_resume("b3", /*@__PURE__*/ _closure_get(7, $Info_content__input_a__OR__input_b));
const $input_a__closure = /*@__PURE__*/ _closure($Info_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("b5", 3, $input_a__closure);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
