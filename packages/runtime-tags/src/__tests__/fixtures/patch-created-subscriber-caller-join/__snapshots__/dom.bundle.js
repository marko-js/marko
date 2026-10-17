// tags/panel.marko
const $if_content2__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b7", 5, /*@__PURE__*/ _fill_join_if("b6", 4, /*@__PURE__*/ _shell_or("b4", 1, ($scope) => _text($scope.a, $scope._._.e + ":" + $scope._._.f)), 0, 0, 0, 0), 0, 0, 0, 0);
const $if_content2__input_a = _closure_resume("b2", /*@__PURE__*/ _closure_get(7, $if_content2__input_a__OR__input_b, ($scope) => $scope._._));
const $if_content2__input_b = _closure_resume("b3", /*@__PURE__*/ _closure_get(8, $if_content2__input_a__OR__input_b, ($scope) => $scope._._));
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _fill_const("b6", 4, $input_a__closure);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
