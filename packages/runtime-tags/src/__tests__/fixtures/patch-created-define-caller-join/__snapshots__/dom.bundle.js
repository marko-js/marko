// tags/panel.marko
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("b3", 1, ($scope) => _text($scope.a, $scope._.d + ":" + $scope._.e));
const $Info_content__input_a = /*@__PURE__*/ _closure_get_patch("b1", 6, $Info_content__input_a__OR__input_b, 0, "b5", 0);
const $input_a__closure = /*@__PURE__*/ _closure($Info_content__input_a);
const $input_a = /*@__PURE__*/ _const(3, $input_a__closure);

// template.marko
const $count = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
