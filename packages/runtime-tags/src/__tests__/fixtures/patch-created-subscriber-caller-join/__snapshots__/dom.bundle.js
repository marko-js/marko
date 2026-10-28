// tags/panel.marko
const $if_content2__input_a__OR__input_b = /*@__PURE__*/ _fill_if("b8 b9", 5, /*@__PURE__*/ _fill_if("b6 b7", 4, /*@__PURE__*/ _or_resume("b2", 1, ($scope) => _text($scope.a, $scope._._.e + ":" + $scope._._.f)), 0, 0, 0, 0), 0, 0, 0, 0);
const $if_content2__input_a = /*@__PURE__*/ _closure_get(7, $if_content2__input_a__OR__input_b, ($scope) => $scope._._, "b0");
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _const(4, $input_a__closure);

// template.marko
const $count = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
