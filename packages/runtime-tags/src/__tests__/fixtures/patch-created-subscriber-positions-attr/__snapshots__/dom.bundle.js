// tags/panel.marko
const $if_content3__input_b__OR__input_a = /*@__PURE__*/ _fill_join_if("b11", 5, /*@__PURE__*/ _fill_join_if("b10", 4, /*@__PURE__*/ _fill_join("b9", 4, /*@__PURE__*/ _patch_or("b7", 1, ($scope) => _text($scope.a, $scope._._.f + ":" + $scope._._.e)), () => () => {}), 0, 0, 1, 0), 0, 0, 1, 0);
const $if_content3__input_b = _closure_resume("b5", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get(7, $if_content3__input_b__OR__input_a, ($scope) => $scope._._)));
const $if_content3__input_a = _closure_resume("b6", /*@__PURE__*/ _closure_get(8, $if_content3__input_b__OR__input_a, ($scope) => $scope._._));
const $input_a__closure = /*@__PURE__*/ _closure($if_content3__input_a);
const $input_a = /*@__PURE__*/ _const(5, $input_a__closure);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
