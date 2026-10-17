// tags/panel.marko
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b3", 5, /*@__PURE__*/ _fill_join_if("b2", 4, /*@__PURE__*/ _patch_or("b1", 1, ($scope) => _text($scope.a, $scope._.e + ":" + $scope._.f)), 0, 0), 0, 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const(4, $if_content__input_a);

// template.marko
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
