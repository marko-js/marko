// tags/panel.marko
const $if_content2__input_a__OR__input_b = /*@__PURE__*/ _or_patch("b2", 1, ($scope) => _text($scope.a, $scope._._.e + ":" + JSON.stringify($scope._._.f)));
const $if_content2__input_a = /*@__PURE__*/ _closure_get_patch("b0", 7, $if_content2__input_a__OR__input_b, ($scope) => $scope._._, "b6", 0);
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _const(4, $input_a__closure);

// template.marko
const $count = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
